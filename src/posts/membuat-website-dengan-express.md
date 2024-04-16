---
title: "Membuat Website dengan Express.js"
subtitle: "Express.js adalah kerangka kerja aplikasi web Node.js"
date: "2024-4-14"
minRead: "3"
category: "Teknologi"
---



Express.js adalah kerangka kerja aplikasi web Node.js yang minimal dan fleksibel yang menyediakan serangkaian fitur kuat untuk pengembangan aplikasi web dan API. Dalam panduan ini, kita akan membahas langkah-langkah untuk membuat website sederhana dengan Express.js.

## Langkah 1: Persiapan

Pastikan Anda telah menginstal Node.js di komputer Anda. Jika belum, Anda dapat mengunduhnya dari [situs web resmi Node.js](https://nodejs.org/).

Setelah Node.js diinstal, buat direktori baru untuk proyek Anda dan masuk ke dalamnya menggunakan terminal:

```bash
mkdir website-express
cd website-express
```


## Langkah 2: Inisialisasi Proyek

Sekarang, inisialisasikan proyek Node.js Anda dengan perintah `npm init`. Ini akan membuat file `package.json` yang berisi informasi tentang proyek Anda.

```bash
npm init -y
```


## Langkah 3: Instalasi Express.js

Instal Express.js sebagai dependensi proyek Anda dengan perintah `npm install express`.

```bash
npm install express
```


## Langkah 4: Membuat Server Express

Buat file `server.js` di dalam direktori proyek Anda dan tambahkan kode berikut:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
```


## Langkah 5: Menjalankan Server

Terakhir, jalankan server Anda dengan perintah `node server.js`. Buka browser Anda dan kunjungi `http://localhost:3000`. Anda akan melihat teks "Hello World!".

```bash
node server.js
```


## Kesimpulan

Dengan mengikuti langkah-langkah di atas, Anda telah berhasil membuat server web sederhana dengan Express.js. Anda sekarang dapat mulai menambahkan rute, middleware, dan logika bisnis lainnya untuk membuat website yang lebih kompleks.