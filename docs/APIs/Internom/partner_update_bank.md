---
id: api_internom_update_partner_bank
title: Харилцагчийн банкны мэдээлэл шинэчлэх
---

# Харилцагчийн банкны мэдээлэл шинэчлэх

`POST: http://test-internom.bumanerp.mn/api/internom/partners/bank/update` 


### Агуулга

`bumanit_internom` модульд хүсэлтийн хүлээн авах controller байх бөгөөд зөвхөн ACS талаас барааны мэдээллийг
erp системд шинэчилнэ.

### Хүсэлт
`application/json`

Example: Authorization: `Bearer SW50ZXJub20hQCM=`


```json
{
	"partners": [
		{
			"acs_id": 1000381,
			"banks": [
				{
					"code": "210000|ARGBM1NUB",
					"number": "123123"
				}
			],
			"acs_id": 1009052,
			"banks": [
				{
					"code": "210000|ARGBMNUB",
					"number": "4444"
				}
			]
		}
	]
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
		  "partner_not_found": False,
      "bankcode_not_found": False,
		]
	}
}
```


```json
partner_not_found - "Хэрвээ False ирвэл харилцагч олдсон",
bankcode_not_found - "Хэрвээ False ирвэл банкны богино код олдсон",

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
                      <td>acs_id</td>
                      <td>string</td>
                      <td>Харилцагчийн ACS дугаар </td>
                      <td>true</td>
                    </tr>
                     <tr>
                      <td>banks-> code</td>
                      <td>string</td>
                      <td>ЕРП дээр бүртгэлтэй байгаа банкны богино код</td>
                      <td>true</td>
                    </tr>
                     <tr>
                      <td>banks-> number</td>
                      <td>string</td>
                      <td>Харилцагчийн дансны дугаар </td>
                      <td>true</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
</Tabs>