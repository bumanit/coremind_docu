---
# slug:
title: Хэрхэн odoo.sh дээр байгаа баазыг автоматаар backup хийж onedrive дээр байршуулах вэ?
authors: [uuganbat]
tags: [odoo]
sidebar_position: 3
---

## Шаардлага

PSC mongolia-с баазын backup авах хүсэлтэй байсан бөгөөд odoo.sh дээр github эрхээр нэвтэрдэг учир татах боломжгүй байсан.

## Шийдэл

scp коммандаар бааз болон data directory-г хуулж аван onedrive руу upload хийх.

## Хийгдсэн ажлууд

### scp connection үүсгэх

scp connection үүсгэхэд бидэнд ssh-key хэрэгтэй бөгөөд odoo.sh нь зөвхөн ssh-rsa эсвэл ssh-ed25519 гэсэн public-key алгоримтуудыг дэмждэг.

#### Хэрхэн ssh-ed25519 public-key generate хийх вэ?

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Дээрх коммандыг терминал дээр ажиллуулснаар id_ed25519, id_ed25519.pub гэсэн 2 файл ~/.ssh directory дотор үүснэ. id_ed25519.pub public-key-г odoo.sh-д хуулж өгснөөр бид ssh холболттой болж байгаа юм.

### scp download database backup and data directory command

```bash
scp odoo.sh-host:/path/to/backup/database /path/to/download/
scp -r odoo.sh-host:/path/to/backup/data_dir /path/to/download/
```

### Хэрхэн rclone ашиглаж onedrive файл upload хийх вэ?

:::note
rclone terminal based cloud upload систем. Terminal-аасаа backup-аа onedrive уруу upload хийхэд хэрэглэгддэг.
:::

:::caution
Ubuntu 18.04 дээр хуучин хувилбар сууж байсан бөгөөд connection үүсгэхэд холбогдохгүй bug-тай байсан. Тиймээс ubuntu 20.04 ба түүнээс дээш үйлдлийн системтэй сервер дээр ажиллуулах хэрэгтэй болсон тул 10.0.0.181 дээр суулгаж холбогдох тохиргоонуудыг хийсэн.
:::

```bash
# Install command
sudo apt update
sudo apt install rclone

# Check
rclone --version

# Configure
rclone config
# Хэрэв яаж тохируулахаа мэдэхгүй байгаа бол доорх линк дээр заавар байршууллаа.
# https://rclone.org/onedrive/

# Upload local file to remote
rclone copy local.file <driveName>:/remote/path
```

## Дүгнэлт

10.0.0.181 дээр psc-backup.sh script файл бичсэн байгаа бөгөөд crontab аар өдөр бүр 2 цаг ажиллуулхаар тохируулсан байгаа. Upload хийгдэж байгаа url: https://bumanitmn-my.sharepoint.com/:f:/g/personal/uuganbat_coremind_mn/Eh081PEOYhlPrYxgnfNMHiwB0oWNZRC2LEnKBwPCaMf2Xg?e=2cvlNC
