---
title: "Install GenieACS secara otomatis"
subtitle: "cara install genieacs secara otomatis dengan script bash"
date: "2024-4-20"
tags: [tr069, genieacs]
thumbnail: "/images/install-tr069.png"
---

## Perisapan

- pastikan sudah mengatur repository
- install paket wget dan curl

**Jika belum install paket jalankan**

```bash
 apt install wget curl
```

## Memulai

Donwload script install genieacs

```bash
wget https://nandaxy.vercel.app/file/genieacs/install.sh
```

Cek script install genieacs

```bash
ls
```

Jalankan script install genieacs

```bash
bash install.sh
```

Ikuti instruksi yang ada di terminal, Tunggu sampai selesai.

## Membuka GenieACS

Untuk membuka genieacs, Buka server web GenieACS deangan PORT 3000 (dalam kasus saya [(http://192.168.28.8:3000](http://192.168.28.8:3000)), klik tombol ABRACADABRA, maka sistem akan membuat pengguna pertama dengan username admin dan password admin.

Silakan login menggunakan admin/admin
