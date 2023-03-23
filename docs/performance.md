---
sidebar_position: 1
---

# Odoo Performance Improvement

:::tip

1. [Felix гаргаж өгсөн гарын авлага](https://docs.google.com/document/d/1QTJ8yOja8k0lWLAztomDSsmn-vg5yhWD113oJRsdces/edit#heading=h.mo180hpcszr4)
2. [Index тавьсан query жагсаалт](https://docs.google.com/spreadsheets/d/1wQ0IJ-LmdiMB5KQMmb-ITIxAV12HSNoBJEjiI_frmBI/edit?usp=sharing)

:::

## Working progress

### Get the sql log for one transaction, changing the Odoo config

Нэг функционалийн (цэсрүү орох, батлах, устгах гэх мэт...) ард ямар query ямар хугацаагаар ажиллаж байгааг мэдэх зорилготой. Ингэхийн тулд хоосон лог файлтай байх бөгөөд функциональ ачааллаж дуусах үед логийг тусад нь авна. Мөн өөрт хэрэгтэй логийг авах бас хэрэггүй логуудыг харахгүй байхын тулд odoo.conf дээр өөрчлөлт оруулах ба өөрчлөлтийн тохиргоог жишээгээр доор үзүүлэв.

```python
# Баазтай холбоотой логуудыг хэвлэнэ
log_level = debug_sql

# CRITICAL шүүлтүүр тухайн логийг харахгүй гэсэн тохиргоо
log_handler = odoo.http:CRITICAL,werkzeug:CRITICAL,odoo.service.server:CRITICAL,odoo.addons.base.models.ir_attachment:CRITICAL
```

### Filter 1 seconds above query with grep and awk command

Лог дээр хэвлэсэн хугацаа нь query эхлэх үеийн хугацаа бөгөөд дараагийн мөрийг хэвлэх үед query дууссан гэж үзэн 2 хугацаан дээр харьцуулалт хийсэн ба 1 секундээс дээш ажилласан query-г шүүж авах grep болон awk комманд жишээгээр оруулсан.

```bash
cat issue-01.log | \
    grep -a "odoo.sql_db: query:" | \
    grep -v "base_registry_signaling.last_value" | \
    grep -v "key='database.secret'" | \
    awk '{split($2,t,",");split(t[1],t2,":");hour=0+t2[1];minute=0+t2[2];second=0+t2[3];millisecond=0+t[2];total_milli=(hour*60*60*1000)+(minute*60*1000)+(second*1000)+millisecond;if(total_milli-prev_milli>1000&&$3==prev_pid)print ("Time of query: "(total_milli-prev_milli)/1000" seconds"), prev_line} {prev_milli=total_milli;prev_pid=$3;prev_line=$0}' > issue-01-analysis.log
```

### Analyzing query

Query-г бааз дээр ажиллуулан анализ хийх хэд хэдэн аргыг доор оруулав.

:::info
Гарч ирсэн json үр дүнг [explain.dalibo.com](https://explain.dalibo.com/) оруулан илүү ойлгомжтой график болон лист байдлаар харах боломжтой болно.
:::

:::note
Pgadmin4 дээрээс query ажиллуулахдаа анализ хийх тохиргоог сонгон ажиллуулж болно.
:::

```bash
psql monos13db -U odoo -XqAt -c "EXPLAIN (ANALYZE, COSTS, VERBOSE, BUFFERS, FORMAT JSON) QUERY";
psql monos13db -U odoo -XqAt -c "EXPLAIN (ANALYZE, COSTS, VERBOSE, BUFFERS, FORMAT JSON) QUERY" > analysis.json;
psql monos13db -U odoo -XqAt -f query.sql
psql monos13db -U odoo -XqAt -f query.sql > analysis.json
```

### Pyspy usage

Хэрэв query дээр анализ хийх сайжруулах боломжгүй бол кодыг performance-г сайжруулах ба query-г дахин бичих эсвэл кодын дахин сайжруулах үйлдлийг хийнэ. Ингэхийн тулд code profiler tool буюу pyspy ашиглах аль функциональ удаж байгааг харах боломжтой.

:::info
profile.json файлыг [www.speedscope.app](https://www.speedscope.app/) сайтруу импортлон илүү хялбар байдлаар харах боломжтой
:::

```bash

# pyspy install
pip install py-spy

# record to raw file
py-spy record -o profile.json -f speedscope --pid <PID>

# OR record directly to svg
py-spy record -o profile.svg --pid <PID>

```

## Checking index statistics and remove useless index

```sql
SELECT
    idstat.relname AS TABLE_NAME,
    indexrelname AS index_name,
    idstat.idx_scan AS index_scans_count,
    pg_size_pretty(pg_relation_size(indexrelid)) AS index_size,
    tabstat.idx_scan AS table_reads_index_count,
    tabstat.seq_scan AS table_reads_seq_count,
    tabstat.seq_scan + tabstat.idx_scan AS table_reads_count,
    n_tup_upd + n_tup_ins + n_tup_del AS table_writes_count,
    pg_size_pretty(pg_relation_size(idstat.relid)) AS table_size
FROM
    pg_stat_user_indexes AS idstat
    JOIN pg_indexes ON indexrelname = indexname
    AND idstat.schemaname = pg_indexes.schemaname
    JOIN pg_stat_user_tables AS tabstat ON idstat.relid = tabstat.relid
WHERE
    indexdef !~* 'unique'
ORDER BY
    idstat.idx_scan ASC,
    pg_relation_size(indexrelid) DESC
```
