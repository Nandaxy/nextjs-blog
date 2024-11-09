---
title: "Install TR069 with GenieACS"
subtitle: "cara install TR069 dengan GenieACS dengan cara mudah"
date: "2024-4-18"
tags: [tr069, genieacs]
thumbnail: "/images/install-tr069.png"
---

## Perisapan

- pastikan sudah mengatur repository
- install paket wget, curl, dan openssh-sftp-server
- mengkonfigurasi permit di sshd_config

**Jika belum install paket jalankan**

```bash
 apt install wget curl openssh-sftp-server
```

## Memulai

gaskennn...

_Pastikan login menggunakan dengan user akses root_
[referensi](https://forum.mikrotik.com/viewtopic.php?t=172399)

### Instal node js

```bash
curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
bash nodesource_setup.sh
apt install nodejs
node -v
```

### MongoDB

```bash
 curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -
```

```bash
apt-key list
```

```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list
apt update
apt install mongodb-org
systemctl start mongod.service
systemctl status mongod
```

```bash
systemctl enable mongod

mongo --eval 'db.runCommand({ connectionStatus: 1 })'
```

```bash
 systemctl status mongod
 systemctl start mongod
 systemctl stop mongod
 systemctl restart mongod
 systemctl disabe mongod
 systemctl enable mongod
```

_Pastikan tidak ada kesalahan saat mengeluarkan perintah di atas, jika tidak harus diulangi lagi_

### GenieACS:

```bash
npm install -g --unsafe-perm genieacs@1.2.7
useradd --system --no-create-home --user-group genieacs
```

```bash
mkdir /opt/genieacs
mkdir /opt/genieacs/ext
chown genieacs:genieacs /opt/genieacs/ext
```

buat file /opt/genieacs/genieacs.env dengan cara : `nano /opt/genieacs/genieacs.env` dengan isi:

```bash
GENIEACS_CWMP_ACCESS_LOG_FILE=/var/log/genieacs/genieacs-cwmp-access.log
GENIEACS_NBI_ACCESS_LOG_FILE=/var/log/genieacs/genieacs-nbi-access.log
GENIEACS_FS_ACCESS_LOG_FILE=/var/log/genieacs/genieacs-fs-access.log
GENIEACS_UI_ACCESS_LOG_FILE=/var/log/genieacs/genieacs-ui-access.log
GENIEACS_DEBUG_FILE=/var/log/genieacs/genieacs-debug.yaml
GENIEACS_EXT_DIR=/opt/genieacs/ext
GENIEACS_UI_JWT_SECRET=secret
```

```bash
chown genieacs:genieacs /opt/genieacs/genieacs.env
chmod 600 /opt/genieacs/genieacs.env
```

```bash
mkdir /var/log/genieacs
chown genieacs:genieacs /var/log/genieacs
```

### Create systemd unit files:

**Genieacs-cwmp**

`systemctl edit --force --full genieacs-cwmp`

```bash
[Unit]
Description=GenieACS CWMP
After=network.target

[Service]
User=genieacs
EnvironmentFile=/opt/genieacs/genieacs.env
ExecStart=/usr/bin/genieacs-cwmp

[Install]
WantedBy=default.target
```

**Genieacs-nbi**

`systemctl edit --force --full genieacs-nbi`

```bash
[Unit]
Description=GenieACS NBI
After=network.target

[Service]
User=genieacs
EnvironmentFile=/opt/genieacs/genieacs.env
ExecStart=/usr/bin/genieacs-nbi

[Install]
WantedBy=default.target
```

**Genieacs-fs**

`systemctl edit --force --full genieacs-fs`

```bash
[Unit]
Description=GenieACS FS
After=network.target

[Service]
User=genieacs
EnvironmentFile=/opt/genieacs/genieacs.env
ExecStart=/usr/bin/genieacs-fs

[Install]
WantedBy=default.target
```

**Genieacs-ui**

`systemctl edit --force --full genieacs-ui`

```bash
[Unit]
Description=GenieACS UI
After=network.target

[Service]
User=genieacs
EnvironmentFile=/opt/genieacs/genieacs.env
ExecStart=/usr/bin/genieacs-ui

[Install]
WantedBy=default.target
```

buat file /etc/logrotate.d/genieacs with content dengan cara : `/etc/logrotate.d/genieacs` dengan isi:

```bash
/var/log/genieacs/*.log /var/log/genieacs/*.yaml {
    daily
    rotate 30
    compress
    delaycompress
    dateext
}
```

### Ngecek aja

```bash
systemctl enable genieacs-cwmp
systemctl start genieacs-cwmp
systemctl status genieacs-cwmp

systemctl enable genieacs-nbi
systemctl start genieacs-nbi
systemctl status genieacs-nbi

systemctl enable genieacs-fs
systemctl start genieacs-fs
systemctl status genieacs-fs

systemctl enable genieacs-ui
systemctl start genieacs-ui
systemctl status genieacs-ui
```

Buka server web GenieACS (dalam kasus saya [(http://192.168.28.8:3000](http://192.168.28.8:3000) dari browser apa pun. Jika ini adalah instalasi baru, klik tombol ABRACADABRA, maka sistem akan membuat pengguna pertama dengan username admin dan password admin.

Silakan login menggunakan admin/admin, lalu buat pengguna lain di bawah tab Admin.

Untuk mengatur perangkat MikroTik agar terdaftar dengan baik di GenieACS, Anda perlu mengedit halaman Index dan halaman Device.

Kedua halaman tersebut dapat diakses di bawah tab Admin, Config, dan Anda akan melihat Edit index page dan Edit device page.
