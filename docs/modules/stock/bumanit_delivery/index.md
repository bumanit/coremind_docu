---
id: bumanit_delivery
description: bumanit_delivery
title: Bumanit Delivery
keywords:
  - bumanit_delivery
# hide_table_of_contents: true
# sidebar_position: 1
---

## Goal

Емонос хүргэлийн аппын интеграц хөгжүүлэлтүүд

### Technical name

- `bumanit_delivery`

### Dependent modules

- `base`
- `bumanit_stock`
- [`bumanit_emonos`](../../sales/bumanit_emonos)

### Functional requirements

1. Хүргэлтийн баримт үүсгэх (controller api)
2. Хүргэлтийн баримт батлах (controller api)
3. Хүргэлтийн баримт цуцлах (controller api)
4. Ебаримтын баримтын дата гаргах (controller api)
5. Хүргэлтйин захиалгын дата өөрчлөх (controller api)
6. Хүргэлтийн баримт буцаах (controller api)


### Модел/Талбарууд

#### Модел
1.  stock.picking (inherit)
    - sale_id
2.  res.users (inherit)
    - restrict_sale

### Controllers

1. /delivery_api/action_confirm
2. /delivery_api/action_get_report
3. /delivery_api/update/received_date
4. /delivery_api/action_cancel
5. /delivery_api/distributor_change
6. /delivery_api/picking_refund
7. /delivery_api/update_picking