---
id: bumanit_eorder_webservice
description: bumanit_eorder_webservice
title: Мэркури борлуулалтын сэрвис
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
#### [`Дэлгэрэнгүй заавар`](../../../APIs/Eorder/eorder_api.mdx)

1.  [`Компанийн мэдээлэл татах`](../../../APIs/Eorder/eorder_company_info.md)
2.  [`Харилцагчийн мэдээлэл татах`](../../../APIs/Eorder/eorder_partner_info)
3.  [`Агуулахын мэдээлэл татах`](../../../APIs/Eorder/eorder_warehouse_info)
4.  [`Албан тушаалын мэдээлэл татах`](../../../APIs/Eorder/eorder_job_info)
5.  [`Ажилтны мэдээлэл татах`](../../../APIs/Eorder/eorder_employee_info)
6.  [`Хэмжих нэгжийн мэдээлэл татах`](../../../APIs/Eorder/eorder_uom_info)
7.  [`Барааны ангиллын мэдээлэл татах`](../../../APIs/Eorder/eorder_prodict_category_info)
8.  [`Барааны нөөцийн мэдээлэл`](../../../APIs/Eorder/eorder_stock_info)
9.  [`Борлуулалтын захиалга үүсгэх`](../../../APIs/Eorder/eorder_create)

### Модел/Талбарууд

1.  order.config (new)
    - company_id (res.company)
    - fetch_type
    - rule
2. res.company (inherit)
    - sale_direct_invoice
    - sale_direct_picking_done
    - order_config_ids (order.config)
    - eorder_partner_id (res.partner)
3. res.users (inherit)
    - eorder_partner_id (res.partner)
4. res.partner (inherit)
    - old_partner_id
5. sale.order (inherit)
    - origin
