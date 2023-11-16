---
id: eorder_employee_info
title: Ажилтны мэдээлэл татах
---
# Ажилтны мэдээлэл татах

`POST: http://dev13db.bumanerp.mn/eorder` 

# Агуулга

`bumanit_eorder_webservice` модульд хүсэлтийн хүлээн авах controller байна.

# Хүсэлт
`application/json`

Example: NO Authorization

Хүсэлтийн параметр дотор ЕРП ийн нэвтрэх нэр, нууц үг ээр хүсэлт илгээнэ.

Method - `get_hr_employee_information`

```json
{
	"jsonrpc": "2.0",
	"params": {
		"method": "get_hr_employee_information",
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
			"id": 528,
			"name": "Адъяа Гомбо",
			"address_home_id": "Адъяа Гомбо",
			"country_id": "Mongolia",
			"gender": "female",
			"work_phone": "77773525",
			"mobile_phone": "99909013",
			"user_id": false,
			"address": "Монос хүнс ХК"
		},
		{
			"id": 3330,
			"name": "Алтанцэцэг Ганзориг",
			"address_home_id": "Алтанцэцэг Ганзориг ",
			"country_id": "Mongolia",
			"gender": "female",
			"work_phone": "77773525, 11343525",
			"mobile_phone": "88076277",
			"user_id": false,
			"address": "Монос хүнс ХК"
		},
	]
}
```

# Параметрүүд
  1.  `method` - Тухайн хүсэлт ямар төрлийн хүсэлт эсэхийг тодорхойлно. Жишээ нь (Компанийн мэдээлэл татах,Харилцагчийн мэдээлэл татах гм)
  2.  `args` - Баазын нэр,Нэвтрэх нэр, Нууц үг дамжуулна.
      1.  `date` - Тухайн огнооноос хойш засварласан эсвэл үүссэн албан тушаал татах зорилгоор огноог оруулна
  3.  `id` - Хүсэлтийн давтагдашгүй ID
