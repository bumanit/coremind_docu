---
id: api_internom_create_transit
title: Нөхөн дүүргэлт үүсгэх
---
# Нөхөн дүүргэлт үүсгэх

`POST: http://test-internom.bumanerp.mn/api/internom/transit` 


# Агуулга

`bumanit_internom` модульд хүсэлтийн хүлээн авах controller байх бөгөөд зөвхөн ACS талаас барааны мэдээллийг
erp системд шинэчилнэ.

# Хүсэлт
`application/json`

Example: Authorization: `Bearer SW50ZXJub20hQCM=`


```json
{
    "from_branch": "0000038-ИНТЕР НОМ - ТӨВ САЛБАР",
    "to_branch":"0000038-ИНТЕР НОМ - ТӨВ САЛБАР",
    "reference": "WH/out/4455",
    "reference_id": "1",
    "order_line": [
        {
            "acs_id": "9789919976003",
            "quantity": 12
        },
        {
            "acs_id": "9789919233976",
            "quantity": 12
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
		'name': 'PP.2021.00958'
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
                      <td>from_branch</td>
                      <td>string</td>
                      <td>Нийлүүлэх агуулахын нэр</td>
                      <td>true</td>
                    </tr>
                      <tr>
                      <td>to_branch</td>
                      <td>string</td>
                      <td>Хүлээн авах агуулахын нэр</td>
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
                      <td>acs_id</td>
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
                  </tbody>
                </table>
              </TabItem>
</Tabs>