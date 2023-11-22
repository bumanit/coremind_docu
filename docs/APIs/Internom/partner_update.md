---
id: api_internom_update_partner
title: Харилцагчийн ерөнхий мэдээлэл шинэчлэх
---
# Харилцагчийн мэдээлэл шинэчлэх

`POST: http://test-internom.bumanerp.mn/api/internom/partners` 



### Агуулга

`bumanit_internom` модульд хүсэлтийн хүлээн авах controller байх бөгөөд зөвхөн ACS талаас барааны мэдээллийг
erp системд шинэчилнэ.

### Хүсэлт
`application/json`

Example: Authorization: `Basic ZGVtbzpwQDU1dzByZA==`


```json
{
	"acs_id": "2681803",
	"name": "МонсударпаблишнХХК",
	"is_company": True,
	"is_vat_payer": True,
	"agent_price_margin": 21,
	"phone": "318953",
	"mobile": "",
	"email": "2681803@amar.services",
	"street2": None
}
```

### Хариултууд

`error/500`
`success/200`
```json
{
	"status": "success",
	"data": {
		"id": 9,
		"acs_id": "2681803",
		"name": "МонсударпаблишнХХК"
	},
	"message": "Requestedoperationisvalid"
}
```

### Параметрүүд
  <Tabs>
              <TabItem value="monos_v13" label="Monos v13" default>
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
                      <td>Барааны acs код</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>Харилцагчийн нэр</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>is_company</td>
                      <td>boolean</td>
                      <td>Компани эсэх</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>is_vat_payer</td>
                      <td>boolean</td>
                      <td>Татвар төлөгч эсэх</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>agent_price_margin</td>
                      <td>integer</td>
                      <td>Харилцагчийн төлөөлөгчийн хувь</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>phone</td>
                      <td>string</td>
                      <td>Харилцагчийн гар утас</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>mobile</td>
                      <td>string</td>
                      <td>Харилцагчийн гар утас</td>
                      <td>true</td>
                    </tr>
                       <tr>
                      <td>email</td>
                      <td>string</td>
                      <td>Харилцагчийн майл</td>
                      <td>true</td>
                    </tr>
                       <tr>
                      <td>street2</td>
                      <td>string</td>
                      <td>Харилцагчийн хаяг</td>
                      <td>true</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
</Tabs>