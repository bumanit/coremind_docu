---
# slug:
title: Хэрхэн Odoo report url-г өөр апп сервер луу заах вэ?
authors: [uuganbat]
tags: [odoo]
sidebar_position: 3
---

## Шаардлага

Odoo 13 дээр бичигдсэн тайлангууд өгөгдлийн баазын сервер ачааллуулхаас илүү апп серверийн RAM-г ихээр ачааллуулж байсан. Үүнээс шалтгаалж зарим нэг үзүүлэлт багатай апп серверүүд гацалт үүсгэж харилцагчаас дуудлага их ирж байсан.

## Шийдэх санаа

CPU, RAM сайтай сервер бэлдэж Odoo дээр тайлан татах үед тус сервер луу зааж ажиллуулах.

```bash title="Жишээ нь:"
# Тайлан татах үед
example1.com/report => example2.com/report гэж ажиллахаар

# Бусад үед:
example1.com/product => example1.com/product гэх мэт бусад path-ууд redirect хийх шаардлагагүй
```

Ингэхийн тулд nginx тохиргоо судалж туршилт хийв.

### Nginx rewrite rule

https://ubiq.co/tech-blog/how-to-redirect-location-to-another-domain-in-nginx/

```bash title="nginx odoo13.conf"
server{
...
    location /report {
        rewrite ^/report(.*)$ https://www.newsite.com/report$1 redirect;
    }
...
}
```

Дээрх блог дээрх жишээний дагуу nginx тохиргоог хийсэн бөгөөд гол асуудал нь CORS header асуудал үүссэн.

CORS гэж юу вэ? гэсэн судалгаа хийж (https://www.stackhawk.com/blog/fixing-no-access-control-allow-origin-header-present/) энэ блогыг олсон бөгөөд хүлээж авч байгаа тал report сервер дээр асуудал байсан байна гэдгийг ойлгож авсан.

Шууд report сервер дээрээ CORS домайнуудыг бүгдийн зөвшөөрөөд тайлангаа татаж үзтэл redirect to login page

Асуудал нь тайлан татаж байгаа серверээс өөр сервер дуудахдаа header дамжуулахгүй session үүсэхгүй байсан. Үүнийг chatgpt ухаад гаргалгаа нь олсон бөгөөд доорх тохиргоогоор асуудалгүй ажилласан.

```bash title="nginx odoo13.conf"
server {
    listen 80;
    server_name odoo.example.com;  # Replace with your Odoo domain
    ...
    # Нэмсэн код
    location /report {
        proxy_pass http://app-server.example.com;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    ...
}
```
