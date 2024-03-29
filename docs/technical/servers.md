---
title: Monos Servers Rearchitecture
description: Monos Servers Rearchitecture
sidebar_position: 2
---

## Хийх ажлын жагсаалт

1. Серверүүдийн ерөнхий мэдээлэл гаргах
2. Серверүүдийн хандалтын мэдээлэл гаргах
3. Компаниудын баазын өгөгдлийн эзлэх хувь гаргах
   1. Хамгийн их багтаамж эзэлж байгаа 10-н table
4. Odoo request хэр их memory ачааллаж байгааг хэмжих
5. Компаниудын бааз залгах

## Серверийн ерөнхий мэдээлэл

| Servers    | Companies                       | Type       | OS           | Hard  | Ram   | CPU |
| ---------- | ------------------------------- | ---------- | ------------ | ----- | ----- | --- |
| 10.0.0.18  | Бүгд                            | DB Replica | Ubuntu 18.04 | 879GB | 126GB | 32  |
| 10.0.0.51  | Бүгд                            | DB         | Ubuntu 18.04 | 878GB | 252GB | 64  |
| 10.0.0.136 | Грийн Гэйт Интернэйшнл          | App        | Ubuntu 18.04 | 20GB  | 16GB  | 16  |
| 10.0.0.137 | Монос Косметик                  | App        | Ubuntu 18.04 | 52GB  | 16GB  | 8   |
| 10.0.0.146 | Монос Фарм                      | App        | Ubuntu 18.04 | 20GB  | 8GB   | 8   |
| 10.0.0.148 | Крон сервер                     | App        | Ubuntu 18.04 | 20GB  | 8GB   | 8   |
| 10.0.0.165 | Монос Улаанбаатар, Монос Хүнс   | App        | Ubuntu 18.04 | 20GB  | 61GB  | 26  |
| 10.0.0.166 | Монос ХХК, Ундрам Хан Хангай    | App        | Ubuntu 18.04 | 20GB  | 61GB  | 26  |
| 10.0.0.167 | Монос Групп, Цомбо, Тимус       | App        | Ubuntu 18.04 | 29GB  | 4GB   | 4   |
| 10.0.0.168 | Ундрам Хан Хангай хуучин        | App        | Ubuntu 18.04 | 52GB  | 16GB  | 8   |
| 10.0.0.169 | Монос Улаанбаатар оффисс        | App        | Ubuntu 18.04 | 20GB  | 4GB   | 4   |
| 10.0.0.178 | delivery.monos.mn, api.monos.mn | App        | Ubuntu 18.04 | 49GB  | 8GB   | 8   |

## Серверийн хандалтын мэдээлэл (Concurrrent users)

| Servers    | Companies                       | Concurrent users (MAX) 24H | Requests per minute (MAX) 24H |
| ---------- | ------------------------------- | -------------------------- | ----------------------------- |
| 10.0.0.18  | Бүгд                            | -                          | -                             |
| 10.0.0.51  | Бүгд                            | -                          | -                             |
| 10.0.0.136 | Грийн Гэйт Интернэйшнл          | 68                         | 433                           |
| 10.0.0.137 | Монос Косметик                  | 320                        | 2369                          |
| 10.0.0.146 | Монос Фарм                      | 130                        | 510                           |
| 10.0.0.148 | Крон сервер                     | -                          | 60                            |
| 10.0.0.165 | Монос Улаанбаатар, Монос Хүнс   | 365                        | 854                           |
| 10.0.0.166 | Монос ХХК, Ундрам Хан Хангай    | 216                        | 994                           |
| 10.0.0.167 | Монос Групп, Цомбо, Тимус       | 21                         | 155                           |
| 10.0.0.168 | Ундрам Хан Хангай хуучин        | -                          | -                             |
| 10.0.0.169 | Монос Улаанбаатар оффисс        | 113                        | 780                           |
| 10.0.0.178 | delivery.monos.mn, api.monos.mn | -                          | 145                           |

## Компаниудын баазын өгөгдлийн эзлэх хувь гаргах

### Хамгийн их багтаамж эзэлж байгаа 10-н table

```sql title="Хамгийн их багтаамж эзэлж байгаа 10 table олох query"
SELECT
 	nspname || '.' || relname AS "table",
 	pg_size_pretty(pg_total_relation_size(C.oid)) AS "total_size"
FROM
	pg_class C
 	LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace)
WHERE
	nspname NOT IN ('pg_catalog', 'information_schema')
 	AND C.relkind <> 'i'
 	AND nspname !~ '^pg_toast'
ORDER BY
	pg_total_relation_size(C.oid) DESC
LIMIT 10;
```

Хамгийн их бичлэгтэй 10 table

| Table                                          | Size  |
| ---------------------------------------------- | ----- |
| public.account_move_line                       | 145GB |
| public.mail_message                            | 144GB |
| public.account_move                            | 63GB  |
| public.mail_followers                          | 40GB  |
| public.stock_move                              | 38GB  |
| public.mail_tracking_value                     | 21GB  |
| public.mail_followers_mail_message_subtype_rel | 15GB  |
| public.account_partial_reconcile               | 14GB  |
| public.stock_move_line                         | 14GB  |

account_move_line дэх бичлэгийн тоо

| Компани                    | Компани дахь бичлэгийн тоо | Нийт бичлэгийн тоо | Эзлэх хувь |
| -------------------------- | -------------------------- | ------------------ | ---------- |
| Монос Улаанбаатар ХХК      | 72304757                   | 138462585          | 52.22 %    |
| Монос ХХК                  | 32838909                   | 138462585          | 23.71 %    |
| Ундрам хан хангай ХХК      | 8524819                    | 138462585          | 6.16 %     |
| Монос хүнс ХК              | 7803853                    | 138462585          | 5.64 %     |
| Грийн гэйт интернэйшнл ХХК | 5719789                    | 138462585          | 4.13 %     |
| Монос Косметик ХХК         | 5376004                    | 138462585          | 3.88 %     |
| Монос Фарм ХХК             | 1884021                    | 138462585          | 1.36 %     |

stock_move_line дэх бичлэгийн тоо

| Компани                    | Компани дахь бичлэгийн тоо | Нийт бичлэгийн тоо | Эзлэх хувь |
| -------------------------- | -------------------------- | ------------------ | ---------- |
| Монос Улаанбаатар ХХК      | 72304757                   | 138462585          | 55.41 %    |
| Монос ХХК                  | 32838909                   | 138462585          | 25.68 %    |
| Ундрам хан хангай ХХК      | 8524819                    | 138462585          | 4.89 %     |
| Монос хүнс ХК              | 7803853                    | 138462585          | 3.63 %     |
| Грийн гэйт интернэйшнл ХХК | 5719789                    | 138462585          | 3.37 %     |
| Монос Косметик ХХК         | 5376004                    | 138462585          | 3.00 %     |
| Монос Фарм ХХК             | 1884021                    | 138462585          | 1.23 %     |

## Компаниудын бааз залгах

1. Odoo дээр лиценз салгах
2. Мета дата
   1. Бараа
   2. Харилцагч
3. Монос Фарм Трейд худалдан авалт
   1. Монос Улаанбаатар
   2. Ундрам Хан Хангай
   3. Монос ХХК
4. Монос Фарм Трейд, МК Бридж, Нею Верамид борлуулалт
   1. Монос Фарм
   2. Монос Косметик
   3. Монос Хүнс
5. Харилцагчийн гэрээний урамшуулал
   1. Монос Фарм - Монос ХХК
   2. Монос Фарм - Монос Фарм Трейд
6. Үнэ дагах захиалга
   1. Монос Улаанбаатар - 6-н компани
   2. Монос Улаанбаатар - Ундрам Хан Хангай
7. Power BI
   1. Монос Фарм Трейд
8. Борлуулалтын тайлан бусад компаниар харах

## Шийдэл

1. Монос Улаанбаатар үндсэн МЕТА дата бүрдүүлэх бааз бусад компаниуд татна

## Өгөгдөл устгах

```sql

# stock.move delete
CREATE INDEX mrp_workorder_line_move_id_idx ON mrp_workorder_line(move_id)
CREATE INDEX stock_scrap_move_id_idx ON stock_scrap(move_id)
CREATE INDEX stock_valuation_adjustment_lines_move_id_idx ON stock_valuation_adjustment_lines(move_id)
DELETE FROM stock_move WHERE id = ANY(SELECT id FROM stock_move WHERE state = 'cancel' AND company_id = 66 LIMIT 100000)
DROP INDEX mrp_workorder_line_move_id_idx
DROP INDEX stock_scrap_move_id_idx
DROP INDEX stock_valuation_adjustment_lines_move_id_idx

# stock.picking delete
CREATE INDEX quality_check_picking_id_idx ON quality_check(picking_id)
CREATE INDEX stock_package_level_picking_id_idx ON stock_package_level(picking_id)
CREATE INDEX stock_scrap_picking_id_idx ON stock_scrap(picking_id)
CREATE INDEX stock_revert_line_picking_id_idx ON stock_revert_line(picking_id)
DELETE FROM stock_picking WHERE id IN (SELECT id FROM stock_picking WHERE state = 'cancel' AND company_id = 66 LIMIT 1000)
DROP INDEX quality_check_picking_id_idx
DROP INDEX stock_package_level_picking_id_idx
DROP INDEX stock_scrap_picking_id_idx
DROP INDEX stock_revert_line_picking_id_idx

DELETE FROM stock_move_line WHERE id = ANY(SELECT id FROM stock_move_line WHERE state = 'cancel' AND company_id = 66 LIMIT 100)

```

```sql

SELECT
   schemaname || '.' || relname as table,
   n_live_tup as num_rows
FROM
   pg_stat_user_tables
ORDER BY
   n_live_tup DESC
LIMIT
   10;
```
