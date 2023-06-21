---
title: Bumanit Account Journal Security
description: Bumanit Account Journal Security
keywords:
  - bumanit_account_journal_security
# sidebar_position: 2
---

### Technical name

- `bumanit_account_journal_security`

### Dependent modules

- `bumanit_account`

### Goal

Санхүүгийн журналыг хязгаарлах хэрэглэгчидээр

1. Хязгаарлах төрөл
   1. Хязгаарлалт байхгүй
   2. Зөвхөн сонгосон хэрэглэгчид харна
   3. Зөвхөн сонгосон хэрэглэгчид харах болон засах

### Functional requirements

1. Бичлэгийн дүрэм (ir.rule)
2. Хандалтын эрх (ir.model.access)
3. Хэрэглэгчийн групп (ir.group)
4. Дэлгэц (ir.ui.view)
5. Өргөтгөсөн дэлгэц (ir.ui.view)
6. Дэлгэцийн үйлдлүүд (ir.model.actions)
7. Модель (ir.model)
8. Визард (ir.model)
9. Controller
10. Логик

11. Санхүүгийн журналыг харах эсвэл засах эрх хязгаарлах
    1. Журнал дээр тохиргоо хийх
    2. Бичлэгийн дүрмүүд үүсгэх
