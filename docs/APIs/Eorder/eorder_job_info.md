---
id: eorder_job_info
title: Албан тушаалын мэдээлэл татах
---
# Албан тушаалын мэдээлэл татах

`POST: http://dev13db.bumanerp.mn/eorder` 

### Агуулга

`bumanit_eorder_webservice` модульд хүсэлтийн хүлээн авах controller байна.

### Хүсэлт
`application/json`

Example: NO Authorization

Хүсэлтийн параметр дотор ЕРП ийн нэвтрэх нэр, нууц үг ээр хүсэлт илгээнэ.

Method - `get_hr_job_information`

```json
{
	"jsonrpc": "2.0",
	"params": {
		"method": "get_hr_job_information",
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
			"id": 343,
			"name": "Ахлах нягтлан бодогч",
			"department_name": false
		},
		{
			"id": 405,
			"name": "Ахлах тогооч",
			"department_name": false
		},
		{
			"id": 322,
			"name": "Байгууллага хариуцсан худалдааны төлөөлөгч",
			"department_name": false
		},
		{
			"id": 1257,
			"name": "Бараа ачигч",
			"department_name": false
		},
		{
			"id": 334,
			"name": "Борлуулагч",
			"department_name": false
		},
		{
			"id": 1307,
			"name": "Борлуулалтын албаны дарга ",
			"department_name": false
		}
	]
}
```

### Параметрүүд
  1.  `method` - Тухайн хүсэлт ямар төрлийн хүсэлт эсэхийг тодорхойлно. Жишээ нь (Компанийн мэдээлэл татах,Харилцагчийн мэдээлэл татах гм)
  2.  `args` - Баазын нэр,Нэвтрэх нэр, Нууц үг дамжуулна.
      1.  `date` - Тухайн огнооноос хойш засварласан эсвэл үүссэн албан тушаал татах зорилгоор огноог оруулна
  3.  `id` - Хүсэлтийн давтагдашгүй ID
