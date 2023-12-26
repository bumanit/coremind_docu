---
id: bumanit_eorder_webservice
description: bumanit_eorder_webservice
title: Bumanit Eorder
keywords:
  - bumanit_eorder_webservice
# hide_table_of_contents: true
# sidebar_position: 1
---

## Goal

Борлуулалт болон түүнтэй холбоотой мастер дата гаргах сервисүүдийн хөгжүүлэлтүүд

### Technical name

- `bumanit_eorder_webservice`

### Dependent modules

- `hr`
- `stock`
- `sale`
- `bumanit_stock`
- `bumanit_sale_availability`

### Functional requirements

1.  [`Компанийн мэдээлэл татах`](../../../apis/eorder/eorder_company_info.md)
2.  [`Харилцагчийн мэдээлэл татах`](../../../apis/eorder/eorder_partner_info)
3.  [`Агуулахын мэдээлэл татах`](../../../apis/eorder/eorder_warehouse_info)
4.  [`Албан тушаалын мэдээлэл татах`](../../../apis/eorder/eorder_job_info)
5.  [`Ажилтны мэдээлэл татах`](../../../apis/eorder/eorder_employee_info)
6.  [`Хэмжих нэгжийн мэдээлэл татах`](../../../apis/eorder/eorder_uom_info)
7.  [`Барааны ангиллын мэдээлэл татах`](../../../apis/eorder/eorder_prodict_category_info)
8.  [`Барааны нөөцийн мэдээлэл`](../../../apis/eorder/eorder_stock_info)
9.  [`Борлуулалтын захиалга үүсгэх`](../../../apis/eorder/eorder_create)

### Модел/Талбарууд

1.  order.config (new)
    - company_id (res.company)
    - fetch_type
    - rule
2.  res.company (inherit)
    - sale_direct_invoice
    - sale_direct_picking_done
    - order_config_ids (order.config)
    - eorder_partner_id (res.partner)
3.  res.users (inherit)
    - eorder_partner_id (res.partner)
4.  res.partner (inherit)
    - old_partner_id
5.  sale.order (inherit)
    - origin
