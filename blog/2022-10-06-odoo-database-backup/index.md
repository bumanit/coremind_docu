---
# slug:
title: Odoo Database Backup
authors: [uuganbat]
tags: [odoo]
sidebar_position: 3
---

## Odoo backup request

```bash

curl -X POST http://localhost:8069/web/database/backup \
    -d "master_pwd=admin&name=devwbl&backup_format=zip" \
    --output backup.zip

```

## Database backup and restore

### backup

```bash
pg_dump -h localhost -U postgres -W -d mydb | gzip > mydb.sql.gz
```

### restore

```bash
gunzip -c mydb.sql.gz | psql -h localhost -U postgres -W -d mydb
```
