---
id: api_internom_create_sale_order
title: Борлуулалтын захиалга үүсгэх
---
# Борлуулалтын захиалга үүсгэх

`POST: http://test-internom.bumanerp.mn/api/internom/sale` 


### Агуулга

`bumanit_internom` модульд хүсэлтийн хүлээн авах controller байх бөгөөд зөвхөн ACS талаас барааны мэдээллийг
erp системд шинэчилнэ.

### Хүсэлт
`application/json`

Example: Authorization: `Bearer SW50ZXJub20hQCM=`


```json
{
	"reference": "S/221031/07060",
	"reference_id": "ecom-WKTkw06pzPmw",
	"branch_name": "internom.mn",
	"order_line": [
		{
			"product_id": "9789919517953",
			"quantity": 1,
			"price_unit": 14900,
			"discount": 0,
			"spend_point": 0,
			"collect_point": 0
		}
	]
}
```

### Хариултууд

`error/500`
`success/200`
```json
{
	'status': 'success',
	'data': {
		'status': 'success',
		'send_ebarimt': False,
		'sale_name': 'S02447',
		'order_ref': "S/221004/06341 (ID: 'ecom-gAeEig93L70r')"
	},
	'message': 'Requestedoperationisvalid'
}
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
                      <td>branch_name</td>
                      <td>string</td>
                      <td>Агуулахын нэр</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>reference</td>
                      <td>string</td>
                      <td>Борлуулалт дээр үүсэх давтагдашгүй код оноох</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>reference_id</td>
                      <td>string</td>
                      <td>Борлуулалт дээр үүсэх давтагдашгүй тоо оноох</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>vat</td>
                      <td>string</td>
                      <td>Байгуулага эсвэл хувь хүнрээ борлуулалт үүсгэх.Хэрвээ дамжуулаагүй бол эцсийн хэрэглэгчээр борлуулалт үүснэ.</td>
                      <td>false</td>
                    </tr>
                    <tr>
                      <td>product_id</td>
                      <td>string</td>
                      <td>Барааны acs код</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>quantity</td>
                      <td>float</td>
                      <td>Борлуулалтын барааны тоо ширхэг</td>
                      <td>true</td>
                    </tr>
                     <tr>
                      <td>discount</td>
                      <td>float</td>
                      <td>Бараанд ноогдох хөнгөлөлт - default:0</td>
                      <td>true</td>
                    </tr>
                     <tr>
                      <td>spend_point</td>
                      <td>float</td>
                      <td>Борлуулалтын мөр дээр хэрэгжсэн лояалти онооны зарцуулалт - default:0</td>
                      <td>true</td>
                    </tr>
                     <tr>
                      <td>collect_point</td>
                      <td>float</td>
                      <td>Борлуулалтын мөр дээр хэрэгжсэн лояалти онооны цуглуулалт - default:0</td>
                      <td>true</td>
                    </tr>
                      <tr>
                      <td>price_unit</td>
                      <td>float</td>
                      <td>Борлуулалтын нэгж үнэ</td>
                      <td>true</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
</Tabs>