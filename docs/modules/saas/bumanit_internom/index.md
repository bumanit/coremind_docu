---
id: bumanit_internom
description: bumanit_internom
title: Bumanit Internom
keywords:
  - bumanit_internom
# hide_table_of_contents: true
# sidebar_position: 1
---

## Goal

Интерном болон Монсудар компанийн нэмэлт хөгжүүлэлтүүд

### Technical name

- `bumanit_internom`

### Dependent modules

- `bumanit_pos_coupon`

### Functional requirements


1.  Интерном пос лояалти хөтөлбөр хэрэгжүүлэх
    - Пос дээр лояалти оноо зарцуулах цуглуулах дэлгэц бэлдэх
    - Посын санхүүгийн бичэлт дээр лояалти цуглуулалт зарцуулалтын бичих
    - Лояалти хэрэглэгч болон оноо зарцуулах эрх, мэдээлэлүүдийг ACS-тэй интеграц хийх
2.  АCS интеграц сервисүүдийн лог хадгалах
3.  Посын борлуулалт болон буцаалтын датаг ACS рүү илгээх
4.  ЕРП мастер датаг ACS талын кодын талбар нэмэх
    - Бараа болон барааны загвар
    - Барааны ангилал
    - Агуулах
    - Харилцагч
5. Посын борлуулалтын тайланд купон болон хөнгөлөлт урамшуулал салгаж тус болгон багана болгож гаргах
6. Посын борлуулалтын тайланд лояалти цуглуулалт болон зарцуулалтын багана нэмж гаргах
7. Интерном бэлгийн карт нэвтрүүлэх
8. Посын захиалга дээр олон купон хөнгөлөлт хэрэгжүүлэх
9. Купон дээр Борлуулалт төлөв нэмэх
10. Купон дээр агуулах холбох
11. Купон дээр болруулалт холбох
12. Тооллогын ашиг алдагдалыг ажилтан руу тохиргоогоо санхүүгийн бичилт бичих
13. ACS болон ЕРП интеграц сервисүүд
   - [`Борлуулалтын захиалга үүсгэх`](../../../APIs/Internom/1create_sale_order.md)
   - [`Борлуулалтын буцаалт үүсгэх`](../../../APIs/Internom/2create_refund_order.md)
   - [`Ебаримт дата авах`](../../../APIs/Internom/3get_ebarimt.md)
   - [`Худалдан авалт үүсгэх`](../../../APIs/Internom/4create_purchase_order.md)
   - [`Нөхөн дүүргэлт үүсгэх`](../../../APIs/Internom/5create_transit_order.md)
   - [`Харилцагчийн тооцоо авах`](../../../APIs/Internom/6partner_calculation.md)
   - [`Харилцагчийн тооцооны жагсаалт авах`](../../../APIs/Internom/7partner_calculation_items.md)
   - [`Борлуулалтын дата авах`](../../../APIs/Internom/8sale_data.md)
   - [`Харилцагчийн мэдээлэл шинэчлэх`](../../../APIs/Internom/partner_update.md)
   - [`Барааны мэдээлэл шинэчлэх`](../../../APIs/Internom/product_info.md)
   - [`Барааны үнийн мэдээлэл шинэчлэх`](../../../APIs/Internom/product_price.md)

### Модел/Талбарууд

1. account.move (inherit)
    - point_use
    - point_collect
    - point_spent
2. account.move.line (inherit)
    - point_collect
    - point_spent
3. internom.log (new)
    - end_point
    - data
    - response
4. pos.category (inherit)
    - acs_id
5. res.partner (inherit)
    - acs_id
    - acs_id_display
    - website_url
6. pos.order (inherit)
    - internom_loyalty_balance
    - internom_loyalty_collect
    - internom_loyalty_spent
    - internom_loyalty_percent
    - internom_loyalty_status
    - internom_refund_reference
    - internom_loyalty_phone
    - send_internom_refund
    - loyalty_refund_cash
7. pos.order.line (inherit)
    - collect_point
    - spent_point
    - coupon_ids (sale.coupon)
8. product.product (inherit)
    - acs_id
    - is_gift
9. product.category (inherit)
    - acs_id
    - webiste_url
10. res.company (inherit)
    - internom_host
    - internom_port
    - internom_api_key
    - internom_api_urls
11. res.config.settings (inherit)
    - internom_property_receivable_account_id (account.account)
    - internom_property_payable_account_id (account.account)
    - internom_loyalty_partner_id (res.partner)
    - internom_add_coupon_recieve_account_id (account.account)
12. sale.coupon.reward (inherit)
    - use_sale_coupon
    - gift_line_product_id (product.product)
13. sale.coupon (inherit)
    - state
    - warehouse_id (stock.warehouse)
    - gift_sale_id (sale.order)
14. stock.warehouse
    - acs_id
    - use_inventory_account_listprice
    - property_stock_input_list_price_inventory_account_id (account.account)
    - property_account_inventory_income_id (account.account)
    - stock_inventory_account_user (res.partner)