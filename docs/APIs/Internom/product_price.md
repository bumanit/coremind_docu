---
id: api_internom_update_product_price
title: Барааны үнийн мэдээлэл шинэчлэх
---

# Барааны үнийн мэдээлэл шинэчлэх

`POST: http://test-internom.bumanerp.mn/api/internom/products/price` 


### Агуулга

`bumanit_internom` модульд хүсэлтийн хүлээн авах controller байх бөгөөд зөвхөн ACS талаас барааны мэдээллийг
erp системд шинэчилнэ.

### Хүсэлт
`application/json`

Example: Authorization: `Basic ZGVtbzpwQDU1dzByZA==`


```json
{
	"acs_id": "5010993819164",
	"price": 55000
}
```

### Хариултууд

`error/500`
`success/200`
```json
{
	"status": "success",
	"data": {
		"id": 28913,
		"name": "Play-DohPeppaPig",
		"acs_id": "5010993819164",
		"message": purchase.order(10889)
	},
	"message": "Requestedoperationisvalid"
}
```

Интерном нь зохиолчийн номыг дамжуулан зарж тодорхой хэмжээний хувь тохиролцож Зохиолч номын дүнгээ өөрчлөх үед энэ сервис дуудагдах ба өмнөх агуулагдах байгаа тоо хэмжээг буцаалт үүсгэж шинэ үнээр буцааж бүх агуулагдах өртгөө шинэчилдэг.

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
                      <td>price</td>
                      <td>float</td>
                      <td>Шиничлэх барааны үнэ</td>
                      <td>true</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
</Tabs>