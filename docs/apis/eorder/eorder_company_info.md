---
id: eorder_company_info
title: Компанийн мэдээлэл татах
---
# Компанийн мэдээлэл татах

`POST: http://dev13db.bumanerp.mn/eorder` 

### Агуулга

`bumanit_eorder_webservice` модульд хүсэлтийн хүлээн авах controller байна.

### Хүсэлт
`application/json`

Example: NO Authorization

Хүсэлтийн параметр дотор ЕРП ийн нэвтрэх нэр, нууц үг ээр хүсэлт илгээнэ.

Method - `get_product_stock_information`

```json
{
	"jsonrpc": "2.0",
	"params": {
		"method": "get_res_company_information",
		"args": [
			"monos13db",
			"food_mercury",
			"food_mercury",
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
	"result": {
		"id": 34,
		"name": "Монос хүнс ХК"
	}
}
```

### Параметрүүд
  1.  `method` - Тухайн хүсэлт ямар төрлийн хүсэлт эсэхийг тодорхойлно. Жишээ нь (Компанийн мэдээлэл татах,Харилцагчийн мэдээлэл татах гм)
  2.  `args` - Баазын нэр,Нэвтрэх нэр, Нууц үг дамжуулна.
  3.  `id` - Хүсэлтийн давтагдашгүй ID
