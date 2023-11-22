---
id: api_internom_update_product
title: Барааны мэдээлэл шиничлэх
---
# Барааны мэдээлэл шиничлэх

`POST: http://test-internom.bumanerp.mn/api/internom/products` 


### Агуулга

`bumanit_internom` модульд хүсэлтийн хүлээн авах controller байх бөгөөд зөвхөн ACS талаас барааны мэдээллийг
erp системд шинэчилнэ.

### Хүсэлт
`application/json`

Example: Authorization: `Basic ZGVtbzpwQDU1dzByZA==`


```json
{
  "name": "Mary Sue",
  "picture": "https://i.imgur.com/test.jpg",
  "preset_name": "string",
  "custom_participant_id": "string"
}
```

### Хариултууд

`error/500`
`success/200`
```json
	{
	"status": "success",
	"data": {
		"id": 118,
		"name": "Гүүртэдэ",
		"acs_id": "9789919233525"
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
                      <td>барааны датан дээрх түлхүүр код</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>new-asc_id</td>
                      <td>string</td>
                      <td>Бараан дээрх acs_id шиничлэх</td>
                      <td>false</td>
                    </tr>
                    <tr>
                      <td>acs_category_id</td>
                      <td>integer</td>
                      <td>Барааны ангилалын acs_id</td>
                      <td>false</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>string</td>
                      <td>Барааны нэр</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>default_code</td>
                      <td>string</td>
                      <td>Барааны дотоод код</td>
                      <td>false</td>
                    </tr>
                    <tr>
                      <td>price</td>
                      <td>float</td>
                      <td>Барааны борлуулах үнэ</td>
                      <td>false</td>
                    </tr>
                    <tr>
                      <td>agent_price_margin</td>
                      <td>string</td>
                      <td>Барааны төлөөлөгчийн хувь</td>
                      <td>false</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
</Tabs>