---
title: "Install Monggodb Di Debian"
subtitle: "-"
date: "2024-9-26"
minRead: "5"
category: "Teknologi"
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
node -v  # Cek versi Node.js
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
systemctl status mongod  # Cek status MongoDB
```

### Buat Database dan Pengguna
Masuk ke MongoDB dan buat database serta pengguna:

```bash
mongosh  # Masuk ke shell MongoDB
use mikropay  # Buat atau pindah ke database "mikropay"

# Buat pengguna admin
db.createUser({
  user: "admin",
  pwd: "admin",
  roles: [
    { role: "dbOwner", db: "mikropay" }
  ]
})

db.getUsers()  # Cek pengguna
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