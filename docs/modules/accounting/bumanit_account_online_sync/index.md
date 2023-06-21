---
description: Bumanit Account Online Sync
title: Bumanit Account Online Sync
keywords:
  - bumanit_account_online_sync
# hide_table_of_contents: true
# sidebar_position: 1
---

### Goal

Банкны corporate gateway үйлчилгээтэй холбогдож банкны хуулга татах, үлдэгдэл татах, гүйлгээ хийх.

### Technical name

- `bumanit_account_online_sync`

### Dependend modules

- `account_online_sync`
- `bumanit_account`

### Res group

1. `Online Sync Enquiry Information` - Харилцахын хуулга татах боломжтой
2. `Online Sync Information Residuals` - Харьцсан дансны үлдэгдэл татах боломжтой
3. `Doesn't Register Payment` - Гүйлгээ бүртгэх эрхийг хязгаарлах

### Functional requirements

1. Монголын банкуудын корпорэйт гэйтвэй үйлчилгээтэй холбох
   1. Хаан банк
   2. Голомт банк
   3. Худалдаа хөгжлийн банк
2. Корпорэйт гэйтвэй тохиргоо дэлгэц хөгжүүлэлт
3. Төлбөрийн арга дээр корпорэйт гэйтвэй гүйлгээ хийж болох тохиргоо
4. Банк хоорондын гүйлгээ хийх стандарт BIC код банкны мэдээлэлд хадгалах
5. Санхүүгийн шинжилгээний пайз дээр deprecated талбар зарлаж тухайн талбар False байгаа бичлэгүүд шинжилгээний пайз сонгох талбарт сонгогдох боломжтой болгох
6. Санхүүгийн журналын бичилтийн мөрийн гүйлгээний утга дараагийн мөр дээрээ авах
7. Төлбөр бүртгэх группээр хязгаарлах
8. Гүйлгээ хийх үлдэгдэл татах, хуулга татах хүсэлтүүд
