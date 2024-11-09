---
title: "Install MongoDB di Debian"
subtitle: "cara install MongoDB di Debian dan konfigurasinya dengan cara mudah "
date: "2024-4-18"
tags: [debian, mongodb]
thumbnail: "/images/install-mongodb.png"
---

## Menyiapkan Debian

### Konfigurasi Alamat IP

Pastikan alamat IP Anda dikonfigurasi dengan benar.

### Instal Paket yang Diperlukan

Untuk memulai, instal paket yang diperlukan seperti `wget`, `ssh`, dan `curl`:

```bash
apt install wget ssh curl
```

### Instal Node.js

Untuk menginstal Node.js, gunakan perintah berikut:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
node -v
```

### Instal MongoDB

Ikuti langkah-langkah ini untuk menginstal MongoDB:

```bash
apt-get install gnupg curl
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor
echo "deb [signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg] http://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-7.0.list
apt-get update
apt-get install -y mongodb-org
systemctl start mongod
systemctl status mongod
```

### Masuk ke Shell MongoDB

```bash
mongosh
```

Format dasar connection string / URI adalah:

```
mongodb://<user>:<password>@<host>:<port>/<database>?authSource=admin
```

Contoh:

```
mongodb://admin:admin@localhost:27017/mikropay?authSource=mikropay
```

untuk akses localhost:

```
mongodb://localhost:27017/mikropay
```
