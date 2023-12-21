---
title: Odoo Endpoints
description: Odoo developed endpoints
sidebar_position: 2
---

Odoo v13 дээр хөгжүүлсэн модиулуудын гаднаас дуудах сервисууд

## BUMANIT_BI

Монос Фарм Трейдээс Power BI тай холбоотой Монос Улаанбаатар, Монос ХХК, Ундрам Хан Хангайн борлуулалт, нөөц, агуулахын мэдээ авах

**_DEV_URL_** : `https://dev13db.bumanerp.mn`

**_PRODUCTION_URL_** : `https://api.monos.mn`

| Key          | Value            |
| ------------ | ---------------- |
| Method       | Post             |
| Content-Type | application/json |

### Борлуулалтын мэдээ өгөх сервис

**_PATH_** : `/api/sales_data`

#### Body

| Parameters | Type   | isRequired | Description                                       |
| ---------- | ------ | ---------- | ------------------------------------------------- |
| username   | String | тийм       | Коормайндаас гаргаж өгсөн нэвтрэх нэр             |
| password   | String | тийм       | Коормайндаас гаргаж өгсөн нууц үг                 |
| key        | String | тийм       | МУБ болон Монос ХХК төрлийн ялгаж өгөх түлхүүр үг |

```javascript title="Body JSON"
{
  "username": "***********",
  "password": "***********",
  "key": "***********"
}
```

#### Response

| Parameters | Type | Description                                       |
| ---------- | ---- | ------------------------------------------------- |
| -          | -    | ------------------------------------------------- |

```json title="Response JSON"
{}
```

### Барааны нөөцийн мэдээ өгөх сервис

**_PATH_** : `/api/stock_data`

#### Body

| Нэр      | isRequired | Тайлбар                                           |
| -------- | ---------- | ------------------------------------------------- |
| username | тийм       | Коормайндаас гаргаж өгсөн нэвтрэх нэр             |
| password | тийм       | Коормайндаас гаргаж өгсөн нууц үг                 |
| key      | тийм       | МУБ болон Монос ХХК төрлийн ялгаж өгөх түлхүүр үг |

```json title: Example JSON
{
  "username": "***********",
  "password": "***********",
  "key": "***********"
}
```

#### Response

```json title: Response
{}
```

### Агуулахын мэдээ өгөх сервис

`Path : /api/stock_warehouse`

#### Body

```json title: Example JSON
{
  "username": "***********",
  "password": "***********",
  "key": "***********"
}
```

| Нэр      | isRequired | Тайлбар                                         |
| -------- | ---------- | ----------------------------------------------- |
| username | тийм       | Коормайндаас гаргаж өгсөн нэвтрэх нэр           |
| password | тийм       | Коормайндаас гаргаж өгсөн нууц үг               |
| key      | тийм       | Монос ХХК: Pa3bg6, МУБ: P06Cg10, Имонос: Pa4cb9 |

#### Response

```json title: Response
{}
```

## BUMANIT_BRICKLAND

Брикланд ХХК зориулсан сервисийн жагсаалт

**_DEV_URL_** : `https://test-brickland.bumanerp.mn`

**_PRODUCTION_URL_** : `https://brickland.bumanerp.mn`

| Key          | Value            |
| ------------ | ---------------- |
| Method       | Post             |
| Content-Type | application/json |

### Барааны нөөцийн мэдээ өгөх сервис

`PATH: /api/brickland/product/<int:product_id>`

#### Body

```json title: Example JSON
{
  "username": "***********",
  "password": "***********"
}
```

| Нэр      | isRequired | Тайлбар                               |
| -------- | ---------- | ------------------------------------- |
| username | тийм       | Коормайндаас гаргаж өгсөн нэвтрэх нэр |
| password | тийм       | Коормайндаас гаргаж өгсөн нууц үг     |

#### Response

```json title: Response
{}
```

### Агуулахын байрлалын мэдээ өгөх сервис

`PATH: /api/brickland/stock_locations`

#### Body

```json title: Example JSON
{
  "username": "***********",
  "password": "***********"
}
```

| Нэр      | isRequired | Тайлбар                               |
| -------- | ---------- | ------------------------------------- |
| username | тийм       | Коормайндаас гаргаж өгсөн нэвтрэх нэр |
| password | тийм       | Коормайндаас гаргаж өгсөн нууц үг     |

#### Response

```json title: Response
{}
```

#### Ажил гүйлгээ үүсгэх сервис

`PATH: /api/brickmedia/account_move/create`

#### Body

```json title: Example JSON
{
  "order_number": "***********",
  "email": "***********",
  "pcode": "***********",
  "price": "***********",
  "ebarimt_type": "***********",
  "vat": "***********"
}
```

| Нэр          | isRequired | Тайлбар              |
| ------------ | ---------- | -------------------- |
| order_number | тийм       | Захиалгын дугаар     |
| email        | тийм       | Имэйл                |
| pcode        | тийм       | Барааны код          |
| price        | тийм       | Үнэ                  |
| ebarimt_type | тийм       | eBarimt илгээх төрөл |
| vat          | тийм       | Татварын дүн         |
