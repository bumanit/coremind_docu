---
slug: prometheus-retention
title: Prometheus Retention
authors: [uuganbat]
tags: [prometheus]
---

Prometheus Retention

```bash

[Unit]
Description=Prometheus
Wants=network-online.target
After=network-online.target

[Service]
User=prometheus
Group=prometheus
Type=simple
ExecStart=/usr/local/bin/prometheus \
    --config.file /etc/prometheus/prometheus.yml \
    --storage.tsdb.path /var/lib/prometheus/ \
    --web.console.templates=/etc/prometheus/consoles \
    --web.console.libraries=/etc/prometheus/console_libraries \
    --web.external-url=http://34.89.26.156:9090 \
    --storage.tsdb.retention.time=1y
[Install]
WantedBy=multi-user.target

```
