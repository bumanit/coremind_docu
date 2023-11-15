---
id: api_brickland_send_partner_mail
title: Харилцагч руу ебаримт илгээх
---
# Харилцагч руу ебаримт илгээх

`POST: http://localhost:8069/api/brickmedia/send_mail` 


# Агуулга

`bumanit_brickland` модульд хүсэлтийн хүлээн авах controller байх бөгөөд зөвхөн brickland талаас сэрвисийг ашиглана.
.
# Хүсэлт
`application/json`

Example: Authorization: `Bearer SW50ZXJub20hQCM=`


```json
{
	"order_number":"ORDER 70"
}
```

# Хариултууд

`error/500`
`success/200`
```json
{
	"jsonrpc": "2.0",
	"id": null,
	"result": [
		{
			"status": "error",
			"code": 3,
			"key": "MAIL",
			"message": "111\nConnection refused"
		}
	]
```
Харилцагч руу майл шидэгдээгүй баримтыг дахин илгээх

`KEYS -> MAIL`


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
                      <td>order_number</td>
                      <td>string</td>
                      <td>Баримтын дугаар</td>
                      <td>true</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
</Tabs>