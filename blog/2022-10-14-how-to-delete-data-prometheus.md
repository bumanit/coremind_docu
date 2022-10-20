---
# slug:
title: How to delete prometheus data
authors: [uuganbat]
tags: [prometheus]
sidebar_position: 3
---

# Delete prometheus data

In this post we assume

1. Command Lines
2. Example

## Delete command lines

```bash

# stop prometheus
sudo service prometheus stop

# run prometheus with admin
./prometheus --web.enable-admin-api

# delete data with jobs
curl -X POST \
    http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]={job="monos_test"}

curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]={job="monos_test"}'

# delete data with tombstones
curl -X POST http://localhost:9090/api/v1/admin/tsdb/clean_tombstones
curl -X POST -g 'http://localhost:9090/api/v1/admin/tsdb/clean_tombstones'

```

## Examples

```bash

curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]={job="oldJob"}'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]={job="monos_test"}'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]={job="monos_production"}'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]={job="ftc_10"}'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]={job="ftc_12"}'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]={job="ftc_13"}'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]={job="jarvis"}'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]={job="loyalty"}'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]={job="monos_db"}'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]={job="emonos"}'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]=a_bad_metric&match[]={region="mistake"}'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]=node_exporter:memory:percent'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]=node_filesystem_free_percent'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]=node_memory_MemFree_percent'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]=ALERTS'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]=ALERTS_FOR_STATE'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]=prometheus_local_storage_memory_series'
curl -X POST -g \
    'http://localhost:9090/api/v1/admin/tsdb/delete_series?match[]={__name__=~".+"}'

```
