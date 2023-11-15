---
id: api_internom_create_refund
title: Боруулалтын буцаалт үүсгэх
---
# Боруулалтын буцаалт үүсгэх

`POST: http://test-internom.bumanerp.mn/api/internom/refund/sale` 


# Агуулга

`bumanit_internom` модульд хүсэлтийн хүлээн авах controller байх бөгөөд зөвхөн ACS талаас барааны мэдээллийг
erp системд шинэчилнэ.

# Хүсэлт
`application/json`

Example: Authorization: `Bearer SW50ZXJub20hQCM=`


```json
{
  "branch_name": "5044251-export",
	"reference": "S/221031/070515",
	"reference_id": "ecom-WKTkw061pzPmw",
	"customer_id": "8218528",
	"order_line": [
		{
			"product_id": "9789919517953",
			"quantity": 1,
			"price_unit": 14900
		}
	]
}
```

# Хариултууд

`error/500`
`success/200`
```json
{
	'status': 'success',
	'data': {
		'status': 'success',
		'sale_name': 'SO/REFUND129',
		'order_ref': "SRe/231005/1513 (ID: 'b47307bc-f0e0-4e6d-a127-2baead6033ef')"
	},
	'message': 'Requestedoperationisvalid'
}
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
                      <td>branch_name</td>
                      <td>string</td>
                      <td>Агуулахын нэр</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>reference</td>
                      <td>string</td>
                      <td>Борлуулалтын буцаалт дээр үүсэх давтагдашгүй код оноох</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>reference_id</td>
                      <td>string</td>
                      <td>Борлуулалтын буцаалт дээр үүсэх давтагдашгүй тоо оноох</td>
                      <td>true</td>
                    </tr>
                     <tr>
                      <td>customer_id</td>
                      <td>string</td>
                      <td>Харилцагчийн татварын дугаар</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>acs_id</td>
                      <td>string</td>
                      <td>Барааны acs код</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>quantity</td>
                      <td>float</td>
                      <td>Борлуулалтын буцаалтын барааны тоо ширхэг</td>
                      <td>true</td>
                    </tr>
                      <tr>
                      <td>price_unit</td>
                      <td>float</td>
                      <td>Борлуулалтын буцаалтын нэгж үнэ</td>
                      <td>true</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
</Tabs>