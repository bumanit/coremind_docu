---
id: api_internom_get_sale_data
title: Борлуулалтын дата авах
---

# Борлуулалтын дата авах

`POST: http://test-internom.bumanerp.mn/api/internom/sale/data` 


### Агуулга

`bumanit_internom` модульд хүсэлтийн хүлээн авах controller байх бөгөөд зөвхөн ACS талаас барааны мэдээллийг
erp системд шинэчилнэ.

### Хүсэлт
`application/json`

Example: Authorization: `Bearer SW50ZXJub20hQCM=`


```json
{
	"supplier_id": "АМ92052302",
	"date_from": "2023-01-02",
	"date_to": "2023-01-02"
}
```

### Хариултууд

`error/500`
`success/200`
```json
{
	"jsonrpc": "2.0",
	"id": null,
	"result": {
		"supplier_id": "АМ92052302",
		"supplier_name": "Дулам Банзрагч",
		"supplier_register": "АМ92052302",
		"vat_type": "Дотоодын борлуулалт - Худалдан авалт",
		"date_from": "2023-01-01 16:00:00",
		"date_to": "2023-01-02 16:00:00",
		"sold_item_list": [
			{
				"item_code": "9789919227258",
				"item_name": "Амьдралд бэлэн үү?  Охин үр минь...",
				"price_margin": 21.0,
				"sales_list": [
					{
						"sold_count": 1.0,
						"cost_price": 15440.91,
						"cost_total": 15440.91,
						"sold_price": 21500.0,
						"sold_total": 21500.0,
						"tax_cost_price": 16985.0,
						"tax_cost_total": 16985.0
					}
				]
			},
			{
				"item_code": "9789919220198",
				"item_name": "Хуримын гэрч; Чамд хэн итгэх юм бэ?-Харь хэлээр яригсад романы мөчир бүлэг",
				"price_margin": 21.0,
				"sales_list": [
					{
						"sold_count": 1.0,
						"cost_price": 15440.91,
						"cost_total": 15440.91,
						"sold_price": 21500.0,
						"sold_total": 21500.0,
						"tax_cost_price": 16985.0,
						"tax_cost_total": 16985.0
					}
				]
			},
			{
				"item_code": "9789919968335",
				"item_name": "Who will believe you? Tears of Dr. Wang",
				"price_margin": 21.0,
				"sales_list": [
					{
						"sold_count": 1.0,
						"cost_price": 21186.36,
						"cost_total": 21186.36,
						"sold_price": 29500.0,
						"sold_total": 29500.0,
						"tax_cost_price": 23305.0,
						"tax_cost_total": 23305.0
					}
				]
			},
		]
	}
}
```

Харилцагчийн татварын дугаараар тухайн харилцагчийн эхлэх дуусах огнооны хоорондох борлуулалсан номын жагсаалтыг буцаана.

```json
supplier_id - "Харилцагчийн татварын дугаар",
supplier_name - "Харилцагчийн нэр",
date_from - "Хүсэлтийн эхлэх огноо - тухайн огнооны мужид хайлт хийнэ",
date_to - "Хүсэлтийн дуусах огноо - тухайн огнооны мужид хайлт хийнэ",
vat_type - "Харилцагчийн татварын тохируулга",
sold_item_list -
                item_code - "Барааны код",
                item_name - "Барааны нэр",
                price_margin - "Барааны төлөөлөгчийн хувь",
                          sold_count - "Зарагдсан тоо ширхэг",
                          cost_price - "Тухайн үеийн нэгж өртөг",
                          cost_total - "Тухайн үеийн нийт өртөг",
                          sold_price - "Тухайн үеийн нэгж үнэ",
                          sold_total - "Тухайн үеийн нийт үнэ",
                          tax_cost_price - "Татваргүй нэгж өртөг",
                          tax_cost_total - "Татваргүй нийт өртөг",


```

### Параметрүүд
  <Tabs>
              <TabItem  default>
                <table>
                  <thead>
                    <tr>
                      <th>Талбарын нэр</th>
                      <th>Төрөл</th>
                      <th>Тайлбар</th>
                      <th>Шаардах</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>supplier_id</td>
                      <td>string</td>
                      <td>Харилцагчийн ACS дугаар </td>
                      <td>true</td>
                    </tr>
                     <tr>
                      <td>date_from</td>
                      <td>string</td>
                      <td>Хүсэлтийн эхлэх огноо - тухайн огнооны мужид хайлт хийнэ </td>
                      <td>true</td>
                    </tr>
                     <tr>
                      <td>date_to</td>
                      <td>string</td>
                      <td>Хүсэлтийн эхлэх огноо - тухайн огнооны мужид хайлт хийнэ </td>
                      <td>true</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
</Tabs>