---
title: Odoo Server Deployment
description: Odoo Server Deployment
sidebar_position: 2
---

# Өгөгдлийн бааз

- Кодууд хуулж апп сервер луу шэйрлэх
- postgresql суулгах
- Мониторинг
  - pgbadger суулгах
  - node_exporter суулгах
  - postgres_exporter суулгах
  - 10.0.0.86 prometheus conf дээр нэмэх
- Баазын тохиргоо хийх
  - pg_hba.conf апп серверүүд зөвшөөрөх
  - postgresql.conf - https://pgtune.leopard.in.ua/ сайтаас харж тохируулах

# Апп сервер

- nginx суулгах
- Odoo хөгжүүлэлтийн орчин бэлдэх
- Сертификатууд тохируулах
- Гарах мэйл серверийн тохиргоо
- Мониторинг
  - node_exporter суулгах
  - promtail суулгах
  - 10.0.0.86 prometheus conf дээр нэмэх
- Корпорэйт гэйтвэй гарч байгаа үгүйг шалгах
- Гаднаас хандах хаягууд шалгах
- Лог retention
- Тохиргоо шалгах
  - db_host
  - db_name
  - db_user
  - db_pass

# Крон сервер

- Odoo хөгжүүлэлтийн орчин бэлдэх
- Сертификатууд тохируулах
- Гарах мэйл серверийн тохиргоо
- Мониторинг
  - node_exporter суулгах
  - promtail суулгах
  - 10.0.0.86 prometheus conf дээр нэмэх
- Корпорэйт гэйтвэй гарч байгаа үгүйг шалгах
- Гаднаас хандах хаягууд шалгах
- Лог retention
- Тохиргоо шалгах
  - db_host
  - db_name
  - db_user
  - db_pass
