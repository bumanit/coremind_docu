---
id: api_internom_get_ebarimt
title: Ебаримт дата авах
---
# Ебаримт дата авах

`POST: http://test-internom.bumanerp.mn/api/internom/check_sale/ebarimt` 


### Агуулга

`bumanit_internom` модульд хүсэлтийн хүлээн авах controller байх бөгөөд зөвхөн ACS талаас барааны мэдээллийг
erp системд шинэчилнэ.

### Хүсэлт
`application/json`

Example: Authorization: `Bearer SW50ZXJub20hQCM=`


```json
{
    "order_number": "1"
}
```

### Хариултууд

`error/500`
`success/200`
```json
{
	'status': 'success',
	'data': {
		'send_ebarimt': True,
		'base_amount': 48000.0,
		'total_loyalty_collect': 0.0,
		'ebarimt_amount': 48000.0,
		'vat_bill_id': '000005044251000220915000034050464',
		'vat_date': datetime.datetime(2022,9,15,12,46,13),
		'vat_register_no': '',
		'vat_qr_data': '968874080821867475081823572621896301696387993545721578490452054427149663297262597515478301152416041012276744061215120146785260065974131635744154267917091857273157050026224710352403447220320896638581756925445320213924534775407924997406142637192650433008415430155615869291336254628325671172803994893899219725158024942',
		'order_ref': "S/220915/05570 (ID: 'ecom-kI5DZYw_Uhao')"
	},
	'message': 'Requestedoperationisvalid'
}
```

Тухайн борлуулалтын ебаримтын мэдээлэл буцаана.

`send_ebarimt`: Ебаримт илгээсэн эсэх

`base_amount`: Борлуулалтын нийт үнэ

`total_loyalty_collect`: лояалти цуглуулалтын дүн

`ebarimt_amount`: Ебаримт руу илгээсэн дүн

`vat_bill_id`: ДДТД 

`vat_date`: Ебаримт руу илгээсэн огноо

`vat_register_no`: Сугалааны дугаар

`vat_qr_data`: QR дата

`order_ref`: Захиалгын ref дугаар

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
                      <td>ЕРП дээр үүссэн борлуулалт дугаар</td>
                      <td>true</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
</Tabs>