---
title: "Install PHPNuxBill di Debian"
subtitle: "PHPNuxBill adalah aplikasi berbasis web untuk manajemen billing Hotspot dan PPPOE pada perangkat Mikrotik"
date: "2024-10-4"
tags: [debian, phpnuxbill]
thumbnail: ""
---

PHPNuxBill adalah aplikasi berbasis web untuk manajemen billing Hotspot dan PPPOE pada perangkat Mikrotik, dikembangkan menggunakan bahasa pemrograman PHP dan memanfaatkan API Mikrotik untuk komunikasi dengan router. [Github](https://github.com/hotspotbilling/phpnuxbill)

##  Persiapan 

- Pastikan sudah mengatur repository Debian
- Server terkoneksi dengan internet 

##  Memulai

Update  Repository  dan menginstal Paket yang diperlukan 


```
apt update
apt install git unzip curl -y
```

### Install Web Server dan Phpmyadmin


```
apt install apache2 mariadb-server php php-mysql php-gd php-curl php-zip php-mbstring -y
```

## Konfigurasi database 

Install mysql


```
mysql_secure_installation
```

Login ke MariaDB


```
mysql -u root -p
```

Buat Database 

```
CREATE DATABASE phpnuxbill;
CREATE USER 'phpnuxbilluser'@'localhost' IDENTIFIED BY 'secret';
GRANT ALL PRIVILEGES ON phpnuxbill.* TO 'phpnuxbilluser'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

## Mendownload dan Menginstal PHPNuxBill

Clone repository dan mengatur perizinan file : 

```
git clone https://github.com/hotspotbilling/phpnuxbill.git
mv phpnuxbill /var/www/html/
chown -R www-data:www-data /var/www/html/phpnuxbill
chmod -R 755 /var/www/html/phpnuxbill

```

## Setup PHPNuxBill

1. Buka browser dan akses: http://(ipserver)/phpnuxbill
2. Ikuti langkah instalasi di layar:
3.  Masukkan informasi database yang telah dibuat sebelumnya:
    - Hostname : localhost 
    - Nama database: phpnuxbill
    - Username: phpnuxbilluser
    - Password: secret 
    
Setelah mengkoneksikan Database, Silahkan buka http://(ipserver)/phpnuxbill/admin untuk membuka halaman admin, dan untuk default login nya : 
    - username : admin
    - password: admin
