---
title: "Membuat Web Server Dengan ExpressJS"
subtitle: "Cara membuat web server dengan ExpressJS dengan cara mudah"
date: "2024-10-10"
tags: [express, javascript, nodejs]
thumbnail: ""
---

ExpressJS adalah salah satu framework web yang sangat populer untuk Node.js. Framework ini sangat ringan, fleksibel, dan mudah digunakan. Dalam tutorial ini, kita akan belajar cara membuat web server menggunakan ExpressJS untuk menyajikan halaman HTML.

#### Langkah 1: Persiapan Lingkungan

Sebelum mulai, pastikan kamu sudah menginstal Node.js dan NPM di komputermu. Kamu bisa mengunduhnya dari [situs resmi Node.js](https://nodejs.org/).

Setelah itu, buat folder proyek baru dan jalankan perintah berikut di terminal untuk menginisialisasi proyek Node.js baru:

```bash
mkdir express-web-server
cd express-web-server
npm init -y
```

Perintah ini akan membuat file `package.json` yang akan menyimpan dependensi proyek kita.

#### Langkah 2: Install Express

Setelah berhasil menginisialisasi proyek, langkah berikutnya adalah menginstal ExpressJS. Jalankan perintah berikut untuk menginstal Express:

```bash
npm install express
```

Ini akan mengunduh dan menginstal Express di dalam folder proyek.

#### Langkah 3: Membuat Web Server

Sekarang, buat file baru bernama `server.js` di dalam folder proyek. Di dalam file ini, kita akan menulis kode untuk membuat web server menggunakan Express.

```javascript
const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
```

Pada kode di atas, kita membuat server yang berjalan di port 3000 dan akan mengirimkan teks HTML sederhana ketika mengakses route `/`. Kamu bisa menambahkan lebih banyak route untuk melayani konten lainnya.

#### Langkah 4: Membuat Halaman HTML

Untuk menyajikan halaman HTML yang lebih kompleks, kita dapat membuat folder `public` dan meletakkan file HTML di sana. Misalnya, buat file `index.html` di dalam folder `public` seperti berikut:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Express Web Server</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        color: #333;
      }
      header {
        background-color: #4caf50;
        color: white;
        padding: 10px 0;
        text-align: center;
      }
      .content {
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Selamat datang di Web Server ExpressJS!</h1>
    </header>
    <div class="content">
      <h2>Ini adalah halaman HTML yang disajikan menggunakan ExpressJS</h2>
      <p>
        Dengan ExpressJS, kita bisa membuat server yang menyajikan halaman HTML
        statis dengan mudah.
      </p>
    </div>
  </body>
</html>
```

#### Langkah 5: Menjalankan Server

Sekarang, jalankan server dengan perintah berikut:

```bash
node server.js
```

Kunjungi `http://localhost:3000` di browser kamu. Kamu akan melihat halaman HTML yang telah kita buat sebelumnya.

#### Langkah 6: Menambahkan Routing Dinamis

ExpressJS memungkinkan kita untuk membuat routing dinamis. Misalnya, kita bisa membuat halaman berbeda berdasarkan parameter yang diterima. Berikut adalah contoh sederhana:

```javascript
app.get("/greeting/:name", (req, res) => {
  const { name } = req.params;
  res.send(
    `<h1>Halo, ${name}!</h1><p>Selamat datang di web server ExpressJS.</p>`
  );
});
```

Jika kamu mengakses `http://localhost:3000/greeting/Zenn`, server akan mengirimkan pesan yang dipersonalisasi dengan nama yang diberikan.

#### Kesimpulan

Dengan ExpressJS, kamu bisa membuat web server dengan sangat mudah dan cepat. Express memberikan kebebasan untuk membuat server yang ringan dan fleksibel, memungkinkan kita untuk menyajikan HTML statis, menangani routing dinamis, dan lebih banyak lagi. Semoga tutorial ini bermanfaat bagi kamu yang ingin mulai belajar ExpressJS!
