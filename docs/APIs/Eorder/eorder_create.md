---
id: eorder_create
title: Борлуулалтын захиалга үүсгэх
---
# Борлуулалтын захиалга үүсгэх

`POST: http://dev13db.bumanerp.mn/eorder` 

# Агуулга

`bumanit_eorder_webservice` модульд хүсэлтийн хүлээн авах controller байна.

# Хүсэлт
`application/json`

Example: NO Authorization

Хүсэлтийн параметр дотор ЕРП ийн нэвтрэх нэр, нууц үг ээр хүсэлт илгээнэ.

Method - `set_sale_order_create`

```json
{
	"jsonrpc": "2.0",
	"params": {
		"method": "set_sale_order_create",
		"args": [
			"monos13db",
			"food_mercury",
			"food_mercury",
			{
				"warehouse_id": 20
			},
			{
				"warehouse_id": 20,
				"distributor": 430,
				"customer_id": 18514,
				"seller_user_id": 430,
				"extarnal_order_id": 3747912,
				"note": "sodon",
				"prod_list": [
					{
						"prod_id": 21532,
						"quantity": 10,
						"uom_id": 1,
						"prod_price": 350,
						"reduced_price": 350
					},
					{
						"prod_id": 21538,
						"quantity": 10,
						"uom_id": 1,
						"prod_price": 350,
						"reduced_price": 350
					},
					{
						"prod_id": 26342,
						"quantity": 1,
						"uom_id": 1,
						"prod_price": 15000,
						"reduced_price": 15000
					}
				]
			}
		]
	},
	"id": 851039384222
}​
```


# Хариултууд

`error/500`
`success/200`

1. Барааны нөөц хүрэлцэхгүй тохиолдолд
```json
{
	"jsonrpc": "2.0",
	"id": 851039388,
	"result": [
		{
			"status": "Failed Sale Order Create",
			"error": "Барааны нөхөн дүүргэлт хийгдэх агуулахыг сонгоогүй байна! : ",
			"Product_id": "1414",
			"Product name": "Baraa ner",
		}
	]
}
```
2. Борлуулалтын захиалга үнийн санал төлөвтэй үүссэн тохиолдолд

```json
{
	"jsonrpc": "2.0",
	"id": 851039388,
	"result": [
		{
			"status": "Success",
			"error": "Quotations Order Created!",
			"sale_name": "S00001",
			"sale_id name": 12,
		}
	]
}
```

3. Борлуулалтын захиалга батлагдсан төлөвтэй үүссэн тохиолдолд
   1. Хэрвээ батлагдсан төлөвтэй үүсгэхийн тулд ЕРП компани тохиргоон дээр Хүргэх баримтыг дуусгах талбарыг чеклэнэ.

```json
{
	"jsonrpc": "2.0",
	"id": 851039388,
	"result": [
		{
			"status": "Success",
			"error": "Confirmed Sale Order Created!",
			"sale_name": "S00001",
			"sale_id name": 12,
		}
	]
}
```
# Параметрүүд
  1.  `method` - Тухайн хүсэлт ямар төрлийн хүсэлт эсэхийг тодорхойлно. Жишээ нь (Компанийн мэдээлэл татах,Харилцагчийн мэдээлэл татах гм)
  2.  `args` - Баазын нэр,Нэвтрэх нэр, Нууц үг дамжуулна.
      1.  `date` - Тухайн огнооноос хойш засварласан эсвэл үүссэн албан тушаал татах зорилгоор огноог оруулна
  3.  `id` - Хүсэлтийн давтагдашгүй ID


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
                      <td>warehouse_id</td>
                      <td>integer</td>
                      <td>Агуулахын ID</td>
                      <td>true</td>
                    </tr>
                      <tr>
                      <td>distributor</td>
                      <td>integer</td>
                      <td>Түгээгчийн ID</td>
                      <td>false</td>
                    </tr>
                    <tr>
                      <td>seller_user_id</td>
                      <td>integer</td>
                      <td>Худалдааны төлөөлөгч ID</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>extarnal_order_id</td>
                      <td>integer</td>
                      <td>Борлуулалт дээр үүсэх давтагдашгүй тоо оноох</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>note</td>
                      <td>string</td>
                      <td>Тэмдэглэл</td>
                      <td>false</td>
                    </tr>
					<tr>
                      <td>prod_id</td>
                      <td>integer</td>
                      <td>Барааны ID</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>quantity</td>
                      <td>float</td>
                      <td>Борлуулалтын барааны тоо ширхэг</td>
                      <td>true</td>
                    </tr>
					<tr>
                      <td>uom</td>
                      <td>integer</td>
                      <td>Хэмжих нэгжийн ID</td>
                      <td>true</td>
                    </tr>
					<tr>
                      <td>prod_price</td>
                      <td>float</td>
                      <td>Барааны үнэ</td>
                      <td>true</td>
                    </tr>
					<tr>
                      <td>reduced_price</td>
                      <td>float</td>
                      <td>Барааны хөнгөлөгдсөн үнэ</td>
                      <td>true</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
</Tabs>