---
id: eorder_partner_info
title: Харилцагчийн мэдээлэл татах
---
# Харилцагчийн мэдээлэл татах

`POST: http://dev13db.bumanerp.mn/eorder` 

### Агуулга

`bumanit_eorder_webservice` модульд хүсэлтийн хүлээн авах controller байна.

### Хүсэлт
`application/json`

Example: NO Authorization

Хүсэлтийн параметр дотор ЕРП ийн нэвтрэх нэр, нууц үг ээр хүсэлт илгээнэ.

Method - `get_res_partner_information`

```json
{
	"jsonrpc": "2.0",
	"params": {
		"method": "get_res_partner_information",
		"args": [
			"monos13db",
			"food_mercury",
			"food_mercury",
			{
				"date": "2010-02-26"
			}
		]
	},
	"id": 851039388
}
```


### Хариултууд

`error/500`
`success/200`
```json
{
	"jsonrpc": "2.0",
	"id": 851039388,
	"result": [
		{
			"id": 24772,
			"name": "Алдар Бэгзсүрэн",
			"vat": "УЦ88092391",
			"website": "false",
			"country_id": "Mongolia",
			"city": "false",
			"state_id": "УБ - Чингэлтэй (MN)",
			"zip": false,
			"street": "6-р хороо",
			"street2": "10а 32тоот",
			"phone": "89063525",
			"mobile": "false",
			"partner_latitude": 0.0,
			"partner_longitude": 0.0,
			"old_partner_id": 40434
		},
		{
			"id": 55681,
			"name": "АПУ ХХК",
			"vat": "2702673",
			"website": false,
			"country_id": "Mongolia",
			"city": false,
			"state_id": "УБ - Хан Уул (MN)",
			"zip": false,
			"street": "Чингисийн Өргөн Чөлөө 14-р гудамж Улаанбаатар 36\t\t",
			"street2": "14-р хороо",
			"phone": "70071111",
			"mobile": "343063\t 90123390",
			"partner_latitude": 47.89777,
			"partner_longitude": 106.90184,
			"old_partner_id": 2826
		},
	]
}
```

```json
			id - "ЕРП дээрх харилцагчийн ID",
			name - "Харилцагчийн нэр",
			vat - "Харилцагчийн татварын дугаар",
			website - "Харилцагчийн вэбсайт",
			country_id - "Харилцагчийн байршил",
			city - "Хот",
			state_id - "Хаяг",
			street - "Хаяг гудамж",
			street2 - "Хаяг гудамж",
			phone - "Харилцагчийн утас",
			mobile - "Харилцагчийн гар утас",
			partner_latitude - "Харилцагчийм байршил өрөгрөг",
			partner_longitude - "Харилцагчийн байршил уртраг",
			old_partner_id - "Odoo 10 дээрх харилцагчийн ID"
```

### Параметрүүд
  1.  `method` - Тухайн хүсэлт ямар төрлийн хүсэлт эсэхийг тодорхойлно. Жишээ нь (Компанийн мэдээлэл татах,Харилцагчийн мэдээлэл татах гм)
  2.  `args` - Баазын нэр,Нэвтрэх нэр, Нууц үг дамжуулна.
      1.  `date` - Тухайн огнооноос хойш засварласан эсвэл үүссэн харилцагчийг татах зорилгоор огноог оруулна
  3.  `id` - Хүсэлтийн давтагдашгүй ID
