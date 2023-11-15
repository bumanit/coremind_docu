---
id: api_internom_get_partner_calculation_item
title: Харилцагчийн тооцооны жагсаалт авах
---

# Харилцагчийн тооцооны жагсаалт авах

`POST: http://test-internom.bumanerp.mn/api/internom/info/sales/items` 


# Агуулга

`bumanit_internom` модульд хүсэлтийн хүлээн авах controller байх бөгөөд зөвхөн ACS талаас барааны мэдээллийг
erp системд шинэчилнэ.

# Хүсэлт
`application/json`

Example: Authorization: `Bearer SW50ZXJub20hQCM=`


```json
{
	"statement_id": 37445
}
```

# Хариултууд

`error/500`
`success/200`
```json
{
	"jsonrpc": "2.0",
	"id": null,
	"result": {
		"supplier_id": "АМ92052302",
		"supplier_name": "Дулам Банзрагч",
		"statement_id": 37445,
		"date_begin": "2023-01-01",
		"date_end": "2023-01-31",
		"date_created": "2023-02-07 05:46:32",
		"item_sold_count": 13,
		"item_profit_total": 263465.00060924684,
		"item_remaining_stock_count": 221.0,
		"item_remaining_total": 4532625.01307,
		"item_list": [
			{
				"item_code": "9789919203719",
				"item_name": "Сүрэг; Чамд хэн итгэх юм бэ?; 5",
				"item_sold_count": 13.0,
				"item_sold_price": 31500.0,
				"item_cost": 24884.9999115385,
				"item_cost_total": 323504.99885
			},
			{
				"item_code": "9789919240707",
				"item_name": "Тэг цэгийн тэмүүлэл",
				"item_sold_count": 17.0,
				"item_sold_price": 29500.0,
				"item_cost": 23305.00007,
				"item_cost_total": 396185.00119
			},
		]
	}
}
```

Харилцагчийн тооцоо хаалтын дугаар явуулсан тохиолдолд тухайн тооцоо хаалтын жагсаалтыг буцаана.

```json
supplier_id - "Харилцагчийн татварын дугаар",
supplier_name0 - "Харилцагчийн нэр",
statement_id - "Харилцагчийн тооцоо хаалт ID",
date_begin - "Харилцагчийн тооцоо хаалтын эхлэх огноо",
date_end - "Харилцагчийн тооцоо хаалтын хаасан огноо",
date_created - "Харилцагчийн тооцоо хаалт үүссэн огноо",
item_sold_count - "Харилцагчийн тооцоо хаалт мөрийн тоо",
item_profit_total - "Тооцоо хаалтын мөрүүдийн нийт нэгж дүн",
item_remaining_stock_count - "Тооцоо хаалтын мөрүүдийн нийт тоо ширхэг",
item_remaining_total - "Тооцоо хаалтын мөрүүдийн нийт дүн",
item_list -
				item_code - "Барааны ACS код",
				item_name - "Барааны нэр",
				item_sold_count - "Зарсан тоо ширхэг",
				item_sold_price -"Зарсан үнэ",
				item_cost - "Нэгж өртөг",
				item_cost_total - "Нийт өртөг"

```

# Параметрүүд
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
                      <td>statement_id</td>
                      <td>string</td>
                      <td>Харилцагчийн тооцоо хаалтын ID - table /partner.calculation.result/ </td>
                      <td>true</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
</Tabs>