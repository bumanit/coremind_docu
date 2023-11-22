---
id: api_internom_get_partner_calculation
title: Харилцагчийн тооцоо авах
---

# Харилцагчийн тооцоо авах

`POST: http://test-internom.bumanerp.mn/api/internom/info/sales` 


### Агуулга

`bumanit_internom` модульд хүсэлтийн хүлээн авах controller байх бөгөөд зөвхөн ACS талаас барааны мэдээллийг
erp системд шинэчилнэ.

### Хүсэлт
`application/json`

Example: Authorization: `Bearer SW50ZXJub20hQCM=`


```json
{
	"supplier_id": "АМ92052302",
	"supplier_name": "Оюунчимэг Банзрагч",
	"supplier_register": "АМ92052302",
	"date_from": "2023-01-01",
	"date_to": "2023-01-31"
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
		"supplier_name": "Оюунчимэг Банзрагч",
		"supplier_register": "АМ92052302",
		"date_from": "2023-01-01",
		"date_to": "2023-01-31",
		"statement": [
			{
				"id": 37445,
				"date_begin": "2023-01-01",
				"date_end": "2023-01-31",
				"date_created": "2023-02-07 05:46:32",
				"item_sold_count": 13,
				"item_profit_total": 263465.0006092468,
				"item_remaining_stock_count": 221.0,
				"item_remaining_total": 4532625.01307
			}
		]
	}
}
```

Харилцагчийн татварын дугаараар тухайн харилцагчийн тооцоо хаалтын жагсаалтыг буцаана.

```json
supplier_id - "Харилцагчийн татварын дугаар",
supplier_name - "Харилцагчийн нэр",
date_from - "Хүсэлтийн эхлэх огноо - тухайн огнооны мужид хайлт хийнэ",
date_to - "Хүсэлтийн дуусах огноо - тухайн огнооны мужид хайлт хийнэ",
statement -
        date_begin - "Харилцагчийн тооцоо хаалтын эхлэх огноо",
        date_end - "Харилцагчийн тооцоо хаалтын хаасан огноо",
        date_created - "Харилцагчийн тооцоо хаалт үүссэн огноо",
        item_sold_count - "Харилцагчийн тооцоо хаалт мөрийн тоо",
        item_profit_total - "Тооцоо хаалтын мөрүүдийн нийт нэгж дүн",
        item_remaining_stock_count - "Тооцоо хаалтын мөрүүдийн нийт тоо ширхэг",
        item_remaining_total - "Тооцоо хаалтын мөрүүдийн нийт дүн",

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
                      <td>supplier_name</td>
                      <td>string</td>
                      <td>Харилцагчийн нэр</td>
                      <td>false</td>
                    </tr>
                     <tr>
                      <td>supplier_register</td>
                      <td>string</td>
                      <td>Харилцагчийн татварын дугаар </td>
                      <td>false</td>
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