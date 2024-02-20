---
title: Useful Commands
---

## Database backup and restore sql.gz

```bash
pg_dump -U user -d database | gzip > file.sql.gz
gunzip < file.sql.gz | psql -U user -d database
```

## TDB Corporate Gateway

```bash

# Only run version OpenSSL 1.X.X

openssl pkcs12 -in tdb.pfx -clcerts -nokeys --out prod.cer
openssl pkcs12 -in tdb.pfx -nodes -out prod_key_cer.pem

```

## Install bumanerp.mn certificate

```bash
sudo cp bumanerpCA.crt /usr/share/ca-certificates/
cd /usr/share/ca-certificates/
sudo dpkg-reconfigure ca-certificates
sudo update-ca-certificates
```
