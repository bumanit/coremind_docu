---
id: bumanit_cwmgl
description: bumanit_cwmgl
title: Bumanit CWMGL
keywords:
  - bumanit_cwmgl
# hide_table_of_contents: true
# sidebar_position: 1
---

## Goal

CWMGL, Gourmet ХХК-ийн баримтын загварын хөгжүүлэлт

### Technical name

- `bumanit_cw_mgl`

### Dependent modules

- `bumanit_stock`
- `bumanit_invoice_stamp`
- `bumanit_product_customer_code`

### Functional requirements

1. Нэхэмжлэх дээр засварын дугаар (`revision_number`) талбар нэмэх
2. Хүргэлтийн хувиарийн шинэ (`delivery.period`) table нэмж борлуулалт, худалдан авалттай холбох
3. Хүргэлтийн төрөл шинэ (`mod.transfer`) table нэмж борлуулалт, худалдан авалттай холбох
4. Бэлэн мөнгөний орлогын баримт
5. Орлого/Зарлагын хүргэлтийн баримт
6. Хүргэлтийн баглааны баримт
7. Нэхэмжлэхийн баримт(монгол) cwmgl загбарын дагуу хэвлэх
8. ЕРП үндсэн нэхэмжлэхийн баримт дээр компанийн банкны дансны мэдээлэл хэвлэх
9. Нэхэмжлэхийн баримт(англи) cwmgl загбарын дагуу хэвлэх
10. Худалдан авалтын шинэ баримт
11. Үнийн саналын шинэ баримт (англи)
12. Цалингийн бодолт дээр ажилласан цагийг цалин дээр үүсгэсэн эхлэх дуусах огноогоор тооцох


### Модел/Талбарууд

1.  delivery.period (new)
    - name
2.  mod.transfer (new)
    - name
3.  sale.order
    - delivery_period (delivery.period)
    - modtransfer (mod.transfer)
    - out_term
    - revision_number
    - documentation
4. purchase.order
    - delivery_period (delivery.period)
    - modtransfer (mod.transfer)
    - out_term
    - revision_number
    - documentation
5. account.move
    - revision_number
