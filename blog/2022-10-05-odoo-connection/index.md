---
# slug:
title: Odoo Connection
authors: [uuganbat]
tags: [odoo]
sidebar_position: 3
---

## XMLRPC

Odoo connection for xmlrpc example

```python
import xmlrpc
import requests


url = "http://localhost:8069"
db = "monos13db"
username = "admin"
password = "************"

common = xmlrpc.client.ServerProxy("{}/xmlrpc/2/common".format(url))
print(common.version())

uid = common.authenticate(db, username, password, {})

models = xmlrpc.client.ServerProxy("{}/xmlrpc/2/object".format(url))
results = models.execute_kw(
    db,
    uid,
    password,
    "account.journal",
    "search_read",
    [[["show_on_dashboard", "=", True]]],
    {
        "fields": [
            "id",
            "name",
            "type",
            "color",
            "show_on_dashboard",
            # "kanban_dashboard",  # 1
            "next_synchronization",
            "account_online_journal_id",
            "synchronization_status",
            "activity_ids",
            "activity_state",
            "json_activity_data",  # 3
            "kanban_dashboard_graph",  # 2
        ],
        "limit": 40,
        "context": {
            "lang": "mn_MN",
            "tz": "Asia/Ulaanbaatar",
            "uid": 2,
            "allowed_company_ids": [1],
            "bin_size": True,
        },
    },
)

print(results)

```

## JSONRPC

Odoo connection for jsonrpc example

```python
import json
import random
import urllib.request


host = "localhost"
port = 8069
database = "monos13db"
user = "admin"
password = "************"


def json_rpc(url, method, params):
    data = {
        "jsonrpc": "2.0",
        "method": method,
        "params": params,
        "id": random.randint(0, 1000000000),
    }
    req = urllib.request.Request(
        url=url,
        data=json.dumps(data).encode(),
        headers={
            "Content-Type": "application/json",
        },
    )
    reply = json.loads(urllib.request.urlopen(req).read().decode("UTF-8"))
    if reply.get("error"):
        raise Exception(reply["error"])
    return reply["result"]


def call(url, service, method, *args):
    return json_rpc(
        url,
        "call",
        {
            "service": service,
            "method": method,
            "args": args,
        },
    )


url = "http://%s:%s/jsonrpc" % (host, port)

results = call(
    url,
    "object",
    "execute",
    database,
    user,
    password,
    "account.journal",
    "search_read",
    [["show_on_dashboard", "=", True]],
)

print(results)
```
