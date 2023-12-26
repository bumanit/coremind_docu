---
title: Odoo Endpoints
description: Odoo developed endpoints
sidebar_position: 2
---

Odoo v13 дээр хөгжүүлсэн модиулуудын гаднаас дуудах сервисууд

## BUMANIT_BI

Монос Фарм Трейдээс Power BI тай холбоотой Монос Улаанбаатар, Монос ХХК, Ундрам Хан Хангайн борлуулалт, нөөц, агуулахын мэдээ авах

:::tip

1. **_DEV_URL_** : `https://dev13db.bumanerp.mn`
2. **_PRODUCTION_URL_** : `https://api.monos.mn`
3. **_METHOD_**: `POST`
4. **_Content-Type_**: `application/json`

:::

### БОРЛУУЛАЛТЫН МЭДЭЭ ӨГӨХ СЕРВИС

#### PATH: `/api/sales_data`

| Parameters | Type   | isRequired | Description                                       |
| ---------- | ------ | ---------- | ------------------------------------------------- |
| username   | String | тийм       | Коормайндаас гаргаж өгсөн нэвтрэх нэр             |
| password   | String | тийм       | Коормайндаас гаргаж өгсөн нууц үг                 |
| key        | String | тийм       | МУБ болон Монос ХХК төрлийн ялгаж өгөх түлхүүр үг |

#### Body

```javascript title="Body JSON"
{
  "username": "***********",
  "password": "***********",
  "key": "***********"
}
```

#### Response

```json title="Response JSON"
{}
```

### БАРААНЫ НӨӨЦИЙН МЭДЭЭ ӨГӨХ СЕРВИС

#### PATH: `/api/stock_data`

| Нэр      | isRequired | Тайлбар                                           |
| -------- | ---------- | ------------------------------------------------- |
| username | тийм       | Коормайндаас гаргаж өгсөн нэвтрэх нэр             |
| password | тийм       | Коормайндаас гаргаж өгсөн нууц үг                 |
| key      | тийм       | МУБ болон Монос ХХК төрлийн ялгаж өгөх түлхүүр үг |

#### Body

```json title="Body JSON"
{
  "username": "***********",
  "password": "***********",
  "key": "***********"
}
```

#### Response

```json title="Response JSON"
{}
```

### АГУУЛАХЫН МЭДЭЭ ӨГӨХ СЕРВИС

#### Path : `/api/stock_warehouse`

| Нэр      | isRequired | Тайлбар                                         |
| -------- | ---------- | ----------------------------------------------- |
| username | тийм       | Коормайндаас гаргаж өгсөн нэвтрэх нэр           |
| password | тийм       | Коормайндаас гаргаж өгсөн нууц үг               |
| key      | тийм       | Монос ХХК: Pa3bg6, МУБ: P06Cg10, Имонос: Pa4cb9 |

#### Body

```json title="Body JSON"
{
  "username": "***********",
  "password": "***********",
  "key": "***********"
}
```

#### Response

```json title="Response JSON"
{}
```

## BUMANIT_BRICKLAND

Брикланд ХХК зориулсан сервисийн жагсаалт

:::tip

1. **_DEV_URL_** : `https://test-brickland.bumanerp.mn`
2. **_PRODUCTION_URL_** : `https://brickland.bumanerp.mn`
3. **_METHOD_**: `POST`
4. **_Content-Type_**: `application/json`

:::

### БАРААНЫ НӨӨЦИЙН МЭДЭЭ ӨГӨХ СЕРВИС

#### PATH: `/api/brickland/product/<int:product_id>`

| Нэр      | isRequired | Тайлбар                               |
| -------- | ---------- | ------------------------------------- |
| username | тийм       | Коормайндаас гаргаж өгсөн нэвтрэх нэр |
| password | тийм       | Коормайндаас гаргаж өгсөн нууц үг     |

#### Body

```json title="Body JSON"
{
  "username": "***********",
  "password": "***********"
}
```

#### Response

```json title="Response JSON"
{}
```

### АГУУЛАХЫН БАЙРЛАЛЫН МЭДЭЭ ӨГӨХ СЕРВИС

#### PATH: `/api/brickland/stock_locations`

| Нэр      | isRequired | Тайлбар                               |
| -------- | ---------- | ------------------------------------- |
| username | тийм       | Коормайндаас гаргаж өгсөн нэвтрэх нэр |
| password | тийм       | Коормайндаас гаргаж өгсөн нууц үг     |

#### Body

```json title="Body JSON"
{
  "username": "***********",
  "password": "***********"
}
```

#### Response

```json title="Response JSON"
{}
```

### АЖИЛ ГҮЙЛГЭЭ ҮҮСГЭХ СЕРВИС

#### PATH: `/api/brickmedia/account_move/create`

| Нэр          | isRequired | Тайлбар              |
| ------------ | ---------- | -------------------- |
| order_number | тийм       | Захиалгын дугаар     |
| email        | тийм       | Имэйл                |
| pcode        | тийм       | Барааны код          |
| price        | тийм       | Үнэ                  |
| ebarimt_type | тийм       | eBarimt илгээх төрөл |
| vat          | тийм       | Татварын дүн         |

#### Body

```json title="Body JSON"
{
  "order_number": "***********",
  "email": "***********",
  "pcode": "***********",
  "price": "***********",
  "ebarimt_type": "***********",
  "vat": "***********"
}
```

#### Response

```json title="Response JSON"
{}
```

<!-- ## BUMANIT_DELIVERY -->

<!-- ## BUMANIT_ECOMMERCE -->

<!-- ## BUMANIT_EORDER_WEBSERVICE -->

<!-- ## BUMANIT_HELPDESK -->

<!-- ## BUMANIT_HR_ANNUAL_WAGE -->

## BUMANIT_INTER_COMPANY

Монос Фарм Трейд ХХК-д зориулсан сервисийн жагсаалт

:::tip

1. **_DEV_URL_** : `https://dev13db.bumanerp.mn`
2. **_PRODUCTION_URL_** : `https://api.monos.mn`
3. **_METHOD_**: `POST`
4. **_Content-Type_**: `application/json`

:::

### МФТ-С ТАТАН АВСАН ХУДАЛДАН АВАЛТЫН БУЦААЛТ ҮҮСГЭХ

Монос Фарм Трейд-н борлуулалтын буцаалт Монос Групп-н худалдан авалтын буцаалт үүсгэх үед дуудах сервис. Эх баримттай болон эх баримтгүй худалдан авалтын буцаалт үүснэ

#### PATH: `/api/interCompanyRefund`

<table>
  <thead>
    <tr>
      <th>Parameters</th>
      <th>Type</th>
      <th>Is Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>username</td>
      <td>string</td>
      <td>yes</td>
      <td>Коормайндаас гаргаж өгсөн нэвтрэх</td>
    </tr>
    <tr>
      <td>password</td>
      <td>string</td>
      <td>yes</td>
      <td>Коормайндаас гаргаж өгсөн нууц үг</td>
    </tr>
    <tr>
      <td>id</td>
      <td>string</td>
      <td>yes</td>
      <td>Буцаалтын ID</td>
    </tr>
    <tr>
      <td>name</td>
      <td>string</td>
      <td>yes</td>
      <td>Буцаалтын нэр</td>
    </tr>
    <tr>
      <td>state</td>
      <td>string</td>
      <td>yes</td>
      <td>Төлөв</td>
    </tr>
    <tr>
      <td>refund_id</td>
      <td>string</td>
      <td>yes</td>
      <td>Буцаалтын ID</td>
    </tr>
    <tr>
      <td>order_line</td>
      <td>list</td>
      <td>yes</td>
      <td>
        <ul>
          <li><b>product_id:</b> Барааны ID</li>
          <li><b>product_code:</b> Барааны код</li>
          <li><b>name:</b> Барааны нэр</li>
          <li><b>discount:</b> Хөнгөлөлт</li>
          <li><b>product_uom_qty:</b> Тоо хэмжээ</li>
          <li><b>price_unit:</b> Нэгж үнэ</li>
          <li><b>price_reduce:</b> Нэгж үнэ цэвэр</li>
          <li><b>price_reduce_taxinc:</b> Нэгж үнэ цэвэр татвартай</li>
          <li><b>price_reduce_taxexcl:</b> Нэгж үнэ цэвэр татваргүй</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### Body

```js title="Body JSON"
{
  "username": "************",
  "password": "************",
  "id": "************",
  "name": "************",
  "state": "************",
  "refund_id": "************",
  "order_line": [
    {
      "product_id": "************",
      "product_code": "************",
      "name": "************",
      "discount": "************",
      "product_uom_qty": "************",
      "price_unit": "************",
      "price_reduce": "************",
      "price_reduce_taxinc": "************",
      "price_reduce_taxexcl": "************",
    }
  ],
}
```

#### Response

```json title="Response JSON"
{}
```

### МФТ-Н ТАТАН АВАЛТЫН БУЦААХ СЕРВИС

Монос Фарм Трейд үйлдвэрийн компаниудаас авсан худалдан авалтын буцаалтыг үүсгэх сервис

#### PATH: `/api/interCompanyRefund/sale`

<table>
  <thead>
    <tr>
      <th>Parameters</th>
      <th>Type</th>
      <th>Is Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>username</td>
      <td>string</td>
      <td>yes</td>
      <td>Коормайндаас гаргаж өгсөн нэвтрэх</td>
    </tr>
    <tr>
      <td>password</td>
      <td>string</td>
      <td>yes</td>
      <td>Коормайндаас гаргаж өгсөн нууц үг</td>
    </tr>
    <tr>
      <td>refund_id</td>
      <td>string</td>
      <td>yes</td>
      <td>Буцаалтын ID</td>
    </tr>
    <tr>
      <td>origin</td>
      <td>string</td>
      <td>yes</td>
      <td>Буцаалтын нэр</td>
    </tr>
    <tr>
      <td>date_order</td>
      <td>string</td>
      <td>yes</td>
      <td>Огноо</td>
    </tr>
    <tr>
      <td>company_vat</td>
      <td>string</td>
      <td>yes</td>
      <td>Компаний татвар төлөгчийн дугаар</td>
    </tr>
    <tr>
      <td>warehouse_id</td>
      <td>string</td>
      <td>yes</td>
      <td>Агуулахын ID</td>
    </tr>
    <tr>
      <td>lines</td>
      <td>list</td>
      <td>yes</td>
      <td>
        <ul>
          <li><b>product_barcode</b>: Барааны баркод</li>
          <li><b>product_qty</b>: Тоо хэмжээ</li>
          <li><b>price_reduce_taxinc</b>: Нэгж үнэ цэвэр татвартай</li>
          <li><b>price_reduce_taxexcl</b>: Нэгж үнэ цэвэр татваргүй</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### Body

```json title="Body JSON"
{
  "username": "***************",
  "password": "***************",
  "refund_id": "***************",
  "origin": "***************",
  "date_order": "***************",
  "company_vat": "***************",
  "warehouse_id": "***************",
  "lines": [
    {
      "product_barcode": "***************",
      "product_qty": "***************",
      "product_barcode": "***************",
      "product_barcode": "***************"
    }
  ]
}
```

#### Response

```json title="Response JSON"
{}
```

### МФТ ХУДАЛДАН АВАЛТЫН БУЦААЛТЫН АГУУЛАХЫН ХӨДӨЛГӨӨН ҮҮСГЭХ СЕРВИС

Монос Фарм Трейдын худалдан авалтын буцаалтын агуулахын баримт үүсгэх сервис. Борлуулалтын буцаалтын агуулахын хөдөлгөөн үүсгэх

#### PATH: `/api/interCompanyRefund/sale-picking`

<table>
  <thead>
    <tr>
      <th>Parameters</th>
      <th>Type</th>
      <th>Is Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>username</td>
      <td>string</td>
      <td>yes</td>
      <td>Коормайндаас гаргаж өгсөн нэвтрэх</td>
    </tr>
    <tr>
      <td>password</td>
      <td>string</td>
      <td>yes</td>
      <td>Коормайндаас гаргаж өгсөн нууц үг</td>
    </tr>
    <tr>
      <td>remote_sale_id</td>
      <td>string</td>
      <td>yes</td>
      <td>Буцаалтын ID</td>
    </tr>
    <tr>
      <td>origin</td>
      <td>string</td>
      <td>yes</td>
      <td>Буцаалтын нэр</td>
    </tr>
    <tr>
      <td>picking_date_done</td>
      <td>string</td>
      <td>yes</td>
      <td>Огноо</td>
    </tr>
    <tr>
      <td>state</td>
      <td>string</td>
      <td>yes</td>
      <td>Төлөв</td>
    </tr>
    <tr>
      <td>stock_moves</td>
      <td>list</td>
      <td>yes</td>
      <td>
        <ul>
          <li><b>product_barcode</b>: Барааны баркод</li>
          <li><b>qty_done</b>: Тоо хэмжээ</li>
          <li><b>lot_name</b>: Цувралын нэр</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### Body

```json title="Body JSON"
{
  "username": "****************",
  "password": "****************",
  "remote_sale_id": "****************",
  "origin": "****************",
  "picking_date_done": "****************",
  "state": "****************",
  "stock_moves": [
    {
      "product_barcode": "****************",
      "qty_done": "****************",
      "lot_name": "****************"
    }
  ]
}
```

#### Response

```json title="Response JSON"
{}
```

<!-- ## BUMANIT_INTERNOM -->

## BUMANIT_ODOO_CONNECTOR

Монос Фарм Трейд ХХК-д зориулсан сервисийн жагсаалт

:::tip

1. **_DEV_URL_** : `https://dev13db.bumanerp.mn`
2. **_PRODUCTION_URL_** : `https://api.monos.mn`
3. **_METHOD_**: `POST`
4. **_Content-Type_**: `application/json`

:::

### ИРП АЖИЛЛАЖ БАЙГАА ҮГҮЙГ ШАЛГАХ СЕРВИС

#### PATH: `/api/check`

| Нэр      | isRequired | Тайлбар          |
| -------- | ---------- | ---------------- |
| username | тийм       | Захиалгын дугаар |
| password | тийм       | Захиалгын дугаар |

### БАРААНЫ МЭДЭЭЛЭЛ ГАРГАЖ ӨГӨХ СЕРВИС

Үйлдвэрлэдэг барааны мэдээлэл өгөх сервис

#### PATH: `/api/product/getInformation`

| Нэр         | isRequired | Тайлбар          |
| ----------- | ---------- | ---------------- |
| username    | тийм       | Захиалгын дугаар |
| password    | тийм       | Захиалгын дугаар |
| company_vat | тийм       | Захиалгын дугаар |

### БАРААНЫ ҮЛДЭГДЛИЙН МЭДЭЭЛЭЛ ӨГӨХ СЕРВИС

#### PATH: `/api/product/checkQuantity`

| Нэр         | isRequired | Тайлбар          |
| ----------- | ---------- | ---------------- |
| username    | тийм       | Захиалгын дугаар |
| password    | тийм       | Захиалгын дугаар |
| company_vat | тийм       | Захиалгын дугаар |

<!-- ## BUMANIT_PARTNER_CONTRACT -->

<!-- ## BUMANIT_POS -->

<!-- ## BUMANIT_POS_INSURANCE -->

<!-- ## BUMANIT_POS_QPAYV2 -->

<!-- ## BUMANIT_PRODUCT_REGISTRATION -->

<!-- ## BUMANIT_SALE_UPOINT -->

<!-- ## COREMIND_EUROPLAST -->

<!-- ## COREMIND_FMCG -->

<!-- ## COREMIND_GORGAS -->

<!-- ## COREMIND_HELPDESK_FORM -->

<!-- ## COREMIND_POS_STOREPAY -->

<!-- ## COREMIND_REST_API -->
