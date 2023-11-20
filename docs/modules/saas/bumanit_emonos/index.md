---
id: bumanit_emonos
description: bumanit_emonos
title: Емонос нэмэлт хөгжүүлэлтүүд
keywords:
  - bumanit_emonos
# hide_table_of_contents: true
# sidebar_position: 1
---

## Goal

Емонос хүргэлтийн апп-д шаардлагатай нэмэлт хөгжүүлэлтүүд

### Technical name

- `bumanit_emonos`

### Dependent modules

- [`bumanit_account`](../../accounting/bumanit_account)
- [`bumanit_sale`](../../sales/bumanit_sale)
- [`bumanit_ecommerce`](../bumanit_emonos)

### Functional requirements

1. Журнал дээр түгээгч гэсэн талбар нэмэх
2. Апп-аас төлбөр автоматаар бүртгэж ба банкны хуулга дээр автомат шивэлт үүсгэх
3. Хүргэлтийн нөхцөл бүртгэж борлуулалт дээр ашиглах
4. Борлуулалтаас нөөцгүй барааг автомат нөхөн дүүргэлт үүсгэж нөөц бүрдүүлэх
5. Апп аас борлуулалтын мөр дээрх хассан устгасан барааг хадгалах


### Модел/Талбарууд

#### Модел
1.  account.journal (inherit)
    - distributor_id (res.users)
2.  delivery.condition (new)
    - name
    - hours
    - code
    - company_id (res.company)
3. sale.order (inherit)
    - check_transits
    - transit_order_ids (stock.transit.order)
    - transit_count
    - check_order_qty
    - app_status
    - app_picking_status
    - delivery_condition (delivery.condition)
    - late_time
    - late_tag
    - distributer_change_date
    - tracking_iframe
4. stock.revert.line (new)
    - product_id (product.product)
    - quantity
    - company_id (res.company)
    - picking_id (stock.picking)
    - distributer (res.users)
    - date
5. stock.picking (inherit)
    - stock_revert_line (stock.revert.line)
    - app_refund_status
6. stock.move (inherit)
    - web_qty
    - qty_changed
