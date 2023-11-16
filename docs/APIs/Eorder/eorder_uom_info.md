---
id: eorder_uom_info
title: Хэмжих нэгжийн мэдээлэл татах
---
# Хэмжих нэгжийн мэдээлэл татах

`POST: http://dev13db.bumanerp.mn/eorder` 

# Агуулга

`bumanit_eorder_webservice` модульд хүсэлтийн хүлээн авах controller байна.

# Хүсэлт
`application/json`

Example: NO Authorization

Хүсэлтийн параметр дотор ЕРП ийн нэвтрэх нэр, нууц үг ээр хүсэлт илгээнэ.

Method - `get_uom_uom_information`

```json
{
	"jsonrpc": "2.0",
	"params": {
		"method": "get_uom_uom_information",
		"args": [
			"monos13db",
			"food_mercury",
			"food_mercury",
			{
				"date": "2022-11-16"
			}
		]
	},
	"id": 851039388
}
```


# Хариултууд

`error/500`
`success/200`
```json
{
	"jsonrpc": "2.0",
	"id": 851039388,
	"result": [
		{
			"id": 50,
			"name": "658",
			"category_id": 8,
			"uom_type": "reference",
			"measure_type": false
		},
		{
			"id": 49,
			"name": "ам",
			"category_id": 20,
			"uom_type": "reference",
			"measure_type": false
		},
		{
			"id": 4,
			"name": "гр",
			"category_id": 2,
			"uom_type": "smaller",
			"measure_type": "weight"
		},
		{
			"id": 3,
			"name": "кг",
			"category_id": 2,
			"uom_type": "reference",
			"measure_type": "weight"
		},
		{
			"id": 7,
			"name": "тн",
			"category_id": 2,
			"uom_type": "bigger",
			"measure_type": "weight"
		},
		{
			"id": 34,
			"name": "уп",
			"category_id": 14,
			"uom_type": "reference",
			"measure_type": false
		},
		{
			"id": 1,
			"name": "Ширхэг",
			"category_id": 1,
			"uom_type": "reference",
			"measure_type": "unit"
		}
	]
}
```

# Параметрүүд
  1.  `method` - Тухайн хүсэлт ямар төрлийн хүсэлт эсэхийг тодорхойлно. Жишээ нь (Компанийн мэдээлэл татах,Харилцагчийн мэдээлэл татах гм)
  2.  `args` - Баазын нэр,Нэвтрэх нэр, Нууц үг дамжуулна.
      1.  `date` - Тухайн огнооноос хойш засварласан эсвэл үүссэн албан тушаал татах зорилгоор огноог оруулна
  3.  `id` - Хүсэлтийн давтагдашгүй ID
