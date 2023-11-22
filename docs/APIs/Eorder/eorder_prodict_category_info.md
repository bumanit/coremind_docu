---
id: eorder_prodict_category_info
title: Барааны ангиллын мэдээлэл татах
---
# Барааны ангиллын мэдээлэл татах

`POST: http://dev13db.bumanerp.mn/eorder` 

### Агуулга

`bumanit_eorder_webservice` модульд хүсэлтийн хүлээн авах controller байна.

### Хүсэлт
`application/json`

Example: NO Authorization

Хүсэлтийн параметр дотор ЕРП ийн нэвтрэх нэр, нууц үг ээр хүсэлт илгээнэ.

Method - `get_product_category_information`

```json
{
	"jsonrpc": "2.0",
	"params": {
		"method": "get_product_category_information",
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


### Хариултууд

`error/500`
`success/200`
```json
{
	"jsonrpc": "2.0",
	"id": 851039388,
	"result": [
		{
			"id": 1,
			"parent_id": false,
			"name": "All"
		},
		{
			"id": 115,
			"parent_id": 1,
			"name": "Deliveries"
		},
		{
			"id": 3,
			"parent_id": 1,
			"name": "Expenses"
		},
		{
			"id": 2,
			"parent_id": 1,
			"name": "Saleable"
		}
	]
}
```

### Параметрүүд
  1.  `method` - Тухайн хүсэлт ямар төрлийн хүсэлт эсэхийг тодорхойлно. Жишээ нь (Компанийн мэдээлэл татах,Харилцагчийн мэдээлэл татах гм)
  2.  `args` - Баазын нэр,Нэвтрэх нэр, Нууц үг дамжуулна.
      1.  `date` - Тухайн огнооноос хойш засварласан эсвэл үүссэн албан тушаал татах зорилгоор огноог оруулна
  3.  `id` - Хүсэлтийн давтагдашгүй ID
