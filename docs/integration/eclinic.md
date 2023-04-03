---
description: eclinic api endpoints
title: Eclininc api endpoints
keywords:
  - eclinic
sidebar_position: 2
---

# URL

**DEV_URL** : `https://platform-testapi.eclinic.mn`

**PRODUCTION_URL** : `https://platform-testapi.eclinic.mn`

## 1. Master_Item

Үндсэн бараа бүтээгдэхүүний мэдээлэл /master data/.

**URL** : `/master-item`

**Method** : `POST`

## 2. Product_Item

Тухайн байгууллага зарагддаг бараа бүтээгдэхүүний мэдээлэл /Master Item-с уламжилна/.

**URL** : `/product-item/new/list`

**Method** : `POST`

### Body

```json
{
  "products": [
    {
      "masterItemId": "",
      "name": ""
    }
  ],
  "organizationId": 0,
  "nonce": ""
}
```

| Нэр            | isRequired | Тайлбар                                                     |
| -------------- | ---------- | ----------------------------------------------------------- |
| products       | тийм       | барааны жагсаалт                                            |
| masterItemId   | тийм       | Master_Item -> id                                           |
| name           | үгүй       | барааны нэр хэрэв оруулаагүй бол Master_Item -> name-г авна |
| organizationId | тийм       | байгууллагын id                                             |
| nonce          | тийм       | hash                                                        |

## 3. Product

Бараа бүтээгдэхүүний platform-д худалдаалах мэдээллийг оруулах /Жишээ нь: үнэ, тоо ширхэг, үлдэгдэл гэх мэт/

**URL** : `/product/new/list`

**Method** : `POST`

### Body

```json
{
  "note": "",
  "products": [
    {
      "price": 0,
      "productItemId": "",
      "balance": {
        "qty": 0,
        "description": "",
        "serialNumber": "",
        "isInsurance": false,
        "isOnline": true,
        "expiredAt": ""
      },
      "categories": [""]
    }
  ],
  "organizationId": 0,
  "nonce": ""
}
```

| Нэр            | isRequired | Тайлбар                             |
| -------------- | ---------- | ----------------------------------- |
| note           | тийм       | Тэмдэглэл                           |
| products       | тийм       | Бүтээгдэхүүний мэдээлэл             |
| productItemId  | тийм       | Product_Item -> productItemId       |
| price          | тийм       | Үнэ                                 |
| balance        | тийм       | Үлдэгдэлийн мэдээлэл                |
| categories     | үгүй       | Ангилалын id                        |
| qty            | тийм       | Тоо ширхэг                          |
| description    | үгүй       | Бүтээгдэхүүний нэмэлт мэдээлэл      |
| serialNumber   | үгүй       | Серийн дугаар                       |
| isInsurance    | үгүй       | Даатгалтай эсэх? default: false     |
| isOnline       | үгүй       | Онлайнаар зарах эсэх? default: true |
| expiredAt      | үгүй       | Дуусах хугацаа                      |
| organizationId | тийм       | Байгууллагын id                     |
| nonce          | тийм       | SHA256                              |

## 3.1 Product Update

Бараа бүтээгдэхүүний мэдээллийг засварлах

**URL** : `/product/${id}`

**Method** : `PUT`

### Body

```json
{
  "name": "",
  "description": "",
  "serialNumber": "",
  "isInsurance": false,
  "isOnline": true,
  "expiredAt": "",
  "categories": [""],
  "images": [""],
  "organizationId": 0,
  "nonce": ""
}
```

| Нэр            | isRequired | Тайлбар                             |
| -------------- | ---------- | ----------------------------------- |
| name           | тийм       | Нэр                                 |
| categories     | үгүй       | Ангилалын id                        |
| images         | үгүй       | Зургийн зам                         |
| description    | үгүй       | Бүтээгдэхүүний нэмэлт мэдээлэл      |
| serialNumber   | үгүй       | Серийн дугаар                       |
| isInsurance    | үгүй       | Даатгалтай эсэх? default: false     |
| isOnline       | үгүй       | Онлайнаар зарах эсэх? default: true |
| expiredAt      | үгүй       | Дуусах хугацаа                      |
| organizationId | тийм       | Байгууллагын id                     |
| nonce          | тийм       | SHA256                              |

## 3.2 Product Update PRICE

Бараа бүтээгдэхүүний үнийн мэдээллийг засварлах

**URL** : `/product/price/${id}`

**Method** : `PUT`

### Body

```json
{
  "price": 0
}
```

| Нэр   | isRequired | Тайлбар |
| ----- | ---------- | ------- |
| price | тийм       | Үнэ     |

## 3.3 Product Add Balance

Бараа бүтээгдэхүүний үлдэгдэл нэмэх

**URL** : `/product-balance/add`

**Method** : `POST`

### Body

```json
{
  "note": "",
  "products": [
    {
      "qty": 0,
      "productId": ""
    }
  ]
}
```

| Нэр       | isRequired | Тайлбар                 |
| --------- | ---------- | ----------------------- |
| note      | тийм       | Тэмдэглэл               |
| products  | тийм       | Бүтээгдэхүүний мэдээлэл |
| qty       | тийм       | Тоо ширхэг              |
| productId | тийм       | Product -> id           |

## 3.4 Product One

Бараа бүтээгдэхүүний дэлгэрэнгүй мэдээлэл

**URL** : `/product/{$id}`

**Method** : `GET`

```json
{}
```

## 3.5 Delete Product

Бараа бүтээгдэхүүн устгах

**URL** : `/product/{$id}`

**Method** : `DELETE`

### Response

```json
{
    Амжилттай үед: TRUE,
    Амжилтгүй үед: FALSE
}
```

## 3.6 Get Many

Бараа бүтээгдэхүүний жагсаалт

**URL** : `/product`

**Method** : `POST`

### Body

```json
{}
```

### Response

```json
[{
    "id": "",
    "isActive": boolean,
    "createdAt": "",
    "name": "",
    "masterItemId": "",
    "organizationId": 0,
    "isProduct": boolean,
    "price": 0,
    "isConfirm": boolean,
    "discount": {
        "sellPrice": 0,
        "percent": 0
    },
    "barcode": "",
    "type": 0,
    "nameEn": "",
    "dose": "",
    "image": "",
    "brandId": "",
    "brandText": "",
    "brandImage": "",
    "drugTypeId": "",
    "drugTypeText": "",
    "doseUnit": "",
    "doseUnitText": "",
    "categoryId": "",
    "categoryText": "",
    "packageSize": 0,
    "packageType": 0,
    "packageTypeText": "",
    "manufacture": "",
    "manufactureText": "",
    "countryId": "",
    "countryText": "",
    "productItemId": "",
    "description": "",
    "isInsurance": boolean,
    "isOnline": boolean,
    "isPrescription": boolean,
    "categories": [],
    "images": [],
    "organization": {
        "id": 0,
        "name": "",
        "image": ""
    }
}]
```

## 4. Shopping Order

Захиалгын жагсаалт

**URL** : `/shopping-order`

**Method** : `POST`

### Body

```json
{}
```

### Response

```json
{
  "id": "",
  "createdAt": "",
  "orderNumber": "",
  "isOnline": boolean,
  "totalAmount": 0,
  "totalDiscount": 0,
  "vat": 0,
  "shipping": 0,
  "paidAt": "",
  "cancelledAt": "",
  "patientId": "",
  "shoppingCartId": "",
  "orderStatus": 0,
  "orderStatusText": "",
  "deliveryMethodId": "",
  "deliveryMethodText": "",
  "isUrgent": boolean,
  "organizationId": 0,
  "patient": {
    "id": "",
    "createdAt": "",
    "lastName": "",
    "firstName": "",
    "phone": "",
    "email": "",
    "birthDate": "",
    "image": ""
  }
}
```

## 4.1 Shopping Order UPDATE

Захиалгын статус солих

**URL** : `/shopping-order/{$id}`

**Method** : `PUT`

### Body

```json
{
  "orderStatus": 0,
  "organizationId": 0,
  "nonce": ""
}
```

| Нэр            | isRequired | Тайлбар         |
| -------------- | ---------- | --------------- |
| orderStatus    | тийм       | Статус          |
| organizationId | тийм       | Байгууллагын id |
| nonce          | тийм       | SHA256          |

#### OrderStatus

```
Захиалга бэлтгэгдсэн: 3,
Хүргэлтийн ажилтанд өгсөн: 5,
Буцаагдсан: 5,
Бараа дууссан: 17
```

## 4.2 Shopping Order One

Захиалгын дэлгэрэнгүй мэдээлэл

**URL** : `/shopping-order/{$id}`

**Method** : `GET`

### Response

```json
{
  "id": "",
  "isActive": true,
  "createdAt": "",
  "orderNumber": "",
  "isOnline": true,
  "totalAmount": 0,
  "totalDiscount": 0,
  "vat": 0,
  "shipping": 0,
  "paidAt": "",
  "cancelledAt": "",
  "patientId": "",
  "shoppingCartId": "",
  "orderStatus": 16,
  "orderStatusText": "",
  "deliveryMethodId": "",
  "deliveryMethodText": "",
  "isUrgent": boolean,
  "patientAddressId": 0,
  "organizationId": 0,
  "products": [],
  "address": {
    "id": 0,
    "createdAt": "",
    "name": "",
    "cityId": 0,
    "cityText": "",
    "districtId": 0,
    "districtText": "",
    "khorooId": 0,
    "khorooText": "",
    "apartment": "",
    "phoneNumber": "",
    "phoneNumber2": "",
    "patientId": ""
  },
  "patient": {
    "id": "",
    "createdAt": "",
    "lastName": "",
    "firstName": "",
    "phone": "",
    "email": "",
    "birthDate": "",
    "image": ""
  },
  "timeline": [
    {
      "id": "",
      "isActive": boolean,
      "createdAt": "",
      "shoppingOrderId": "",
      "orderStatus": 0,
      "orderStatusText": "0"
    }
  ],
  "deliveryCodes": [""]
}
```
