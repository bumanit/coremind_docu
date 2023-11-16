---
id: api_brickland_create_account_move
title: Нэхэмжлэхийн хуудас үүсгэх
---
# Нэхэмжлэхийн хуудас үүсгэх

`POST: http://localhost:8069/api/brickmedia/account_move/create` 


### Агуулга

`bumanit_brickland` модульд хүсэлтийн хүлээн авах controller байх бөгөөд зөвхөн brickland талаас сэрвисийг ашиглана.
.

### Хүсэлт
`application/json`

Example: Authorization: `Bearer SW50ZXJub20hQCM=`


```json
{
	"order_number":"ORDER 74",
	"email":"altanhundaga123@gmail.com",
	"pcode":"7700008",
	"price":1400,
	"ebarimt_type":2,
	"vat":"MY98111018",
	"note":"payment_type"
}
```

### Хариултууд

`error/500`
`success/200`
```json
{
	"jsonrpc": "2.0",
	"id": null,
	"result": [
		{
			"status": "success",
			"code": 1,
			"key": "ORDER",
			"message": "Order created in ERP",
			"web_number": "ORDER 74",
			"erp_number": "INV/2023/11248"
		},
		{
			"status": "success",
			"code": 2,
			"key": "EBARIMT",
			"message": "Ebarimt send"
		},
		{
			"status": "error",
			"code": 3,
			"key": "MAIL",
			"message": "111\nConnection refused"
		}
	]
```

Brickland хүсэлт нь борлуулалт үүсгээд Ебаримт руу илгээгээд 
мөн тухайн харилцагч майлээр ебаримтын дугаарыг илгээнэ

`KEYS -> ORDER,EBARIMT,MAIL`

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
                      <td>order_number</td>
                      <td>string</td>
                      <td>Борлуулалтын дугаар</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>email</td>
                      <td>string</td>
                      <td>Харилцагчийн майл хаяг</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>pcode</td>
                      <td>string</td>
                      <td>Барааны дугаар</td>
                      <td>true</td>
                    </tr>
                      <tr>
                      <td>price</td>
                      <td>float</td>
                      <td>Борлуулалтын нэгж үнэ</td>
                      <td>true</td>
                    </tr>
                     <tr>
                      <td>ebarimt_type</td>
                      <td>integer</td>
                      <td>Ебаримтын төрөл. 1 - хувь хүн 2-байгуулга</td>
                      <td>true</td>
                    </tr>
                       <tr>
                      <td>vat</td>
                      <td>string</td>
                      <td>Харилцагчийн татвар</td>
                      <td>true</td>
                    </tr>
                     <tr>
                      <td>note</td>
                      <td>string</td>
                      <td>Тэмдэглэл</td>
                      <td>false</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
</Tabs>