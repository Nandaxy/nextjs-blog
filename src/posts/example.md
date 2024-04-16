---
title: "Menggunakan AI untuk menghasilkan puisi"
subtitle: "Saya menggunakan GPT-3 untuk menghasilkan puisi dan konten kreatif lainnya."
date: "2021-08-27"
minRead: "7"
category: "Teknologi"
---

Saya baru-baru ini diberikan akses ke [OpenAI GPT-3 Beta](https://beta.openai.com/), sebuah model bahasa yang sangat kuat yang dapat digunakan untuk melakukan segala macam sihir seperti pembuatan bot obrolan, ringkasan artikel, dan [banyak hal keren lainnya](https://beta.openai.com/examples).

Tetapi aplikasi yang benar-benar membuat saya bersemangat adalah menulis kreatif (seperti pembuatan SEO yang keren dan semuanya, tetapi juga agak kering untuk selera saya).

Saya sebelumnya pernah melihat [AI Dungeon](https://play.aidungeon.io/) menggunakan GPT untuk membuat permainan petualangan teks interaktif (coba saja, itu menyenangkan!) dan itu membuat saya penasaran tentang apa lagi yang bisa dilakukan AI — terutama ketika elemen _kreativitas_ dan _struktur_ terlibat.

Saya memutuskan untuk mengujinya dengan pembuatan puisi dan cerita, dan ini adalah hasil tulisan dari eksperimen tersebut.

## Apa itu GPT-3?

[GPT-3](https://arxiv.org/abs/2005.14165) adalah model bahasa yang dikembangkan oleh [OpenAI](https://beta.openai.com/). Bagi pengembang rata-rata (seperti saya), itu pada dasarnya adalah kotak hitam ajaib yang sangat kuat dalam kasus penggunaan bahasa alami.

Ia dilatih dengan perkiraan **45 TB** data teks (hampir semua yang tersedia secara publik di internet)!

Kita benar-benar bisa memintanya untuk melakukan apa saja. Misalnya, jika saya meminta langkah-langkah untuk memanggang kue, ia memberi saya:

```
1. Panaskan oven hingga 350°F.
2. Olesi dan taburi tepung pada loyang kue bundar berdiameter 9 inci.
3. Aduk adonan kue, minyak, telur, dan air dalam mangkuk besar dengan sendok hingga tercampur.
4. Tuang adonan ke dalam loyang yang sudah disiapkan.
```

Atau, saya bisa memberinya contoh apa yang saya inginkan. Seperti:

```
[15 menit] Berjalan atau berlari ringan untuk pemanasan.
[10 menit] 3 set Squat
```

Dan ia akan memahami bahwa kita sedang menulis rutinitas latihan, dan melanjutkan dalam gaya itu — merespons dengan sesuatu seperti ini:

```
[10 menit] 3 set Push up (gunakan bangku/tangga jika tidak bisa melakukan yang biasa)
[10 menit] 3 set Lunges
[10 menit] 3 set Sit up
[10 menit] 3 set Tricep dips
[10 menit] 3 set
```

Ia juga bisa melakukan hal-hal yang cukup aneh, seperti menerjemahkan dari Bahasa Inggris ke emoji.

```
Saya suka pizza dan bir.
😀❤️🍕🍺

Saya terbang ke Jepang dan makan Sushi.
✈️🇯🇵😋 🍣

Saya sedang berselancar salju di Prancis.
🏂❄️🇫🇷
```

Jadi seperti yang bisa Anda lihat, ada begitu banyak cara Anda bisa berinteraksi dengan AI.

Sekarang terserah kita untuk bereksperimen dengannya dan melihat bagaimana itu bisa berguna untuk masalah tertentu. Ayo kita coba!

## 💡 Metode

Hari ini, saya ingin melihat apakah AI ini mampu memahami dan menghasilkan puisi. Mengapa puisi? Karena saya pikir itu adalah contoh yang relatif sederhana, dan memiliki tiga dimensi yang berbeda yang bisa kita nilai dengan mudah:

- Nada
- Konten
- Struktur

OpenAI memungkinkan pelanggan berinteraksi dengan GPT-3 melalui API, jadi itulah cara saya akan menggunakannya juga.

Saya akan memberikan permintaan langsung dan contoh (dengan kompleksitas yang meningkat), dan biarkan AI menghasilkan **20 respon** untuk setiap permintaan.

Selain itu, untuk contoh permintaan saya, saya akan menghindari menggunakan teks yang sudah ada — AI mungkin sudah melihatnya dalam data pelatihan dan itu mungkin akan memengaruhi hasil.

Kemudian saya akan membicarakan sampel terbaik dalam setiap batch dan apa pun yang saya temukan menarik tentang mereka.

Juga saya telah mempublikasikan [hasil lengkap di GitHub](https://github.com/pixegami/gpt-3-poetry-results) jika Anda ingin memeriksa sisa sampel.

## 🧪 Hasil

### ✍ Puisi pendek

Sebagai dasar, saya ingin tahu seberapa banyak AI memahami tentang nada, struktur, dan konten dari 'puisi.'

```
[Prompt]
Tulis puisi pendek.

[Sample AI Response]
Salju turun,

diam-diam,

tanah menjadi selimut putih.
Pahlawan bermimpi dengan damai,
di mana mereka tidur.
```

Ini adalah awal yang cukup bagus! Ini terstruktur tetapi tidak berima. Bahasa dan cerita juga memiliki nuansa 'poetik'. Tidak buruk.

Di antara 20 sampel lainnya juga ada sampel yang lucu seperti ini 🤡 :

```
[Sample AI Response]
Hidup itu seperti pantai
Di mana kita mengambil kelapa kita dan memukulnya
atau mengunyahnya

Ada juga pantai lain
Di mana kita bisa minum pasir dan merenungkan
```

Mungkin tidak tepat sasaran, tetapi masih cukup menarik.

### ✍ Puisi pendek dengan tema

Selanjutnya, saya ingin memperluas permintaan dengan beberapa tema, hanya untuk melihat seberapa mampu AI mengasimilasikannya ke dalam responsnya.

Saya memilih tema yang biasanya tidak terkait dengan puisi: **Eksplorasi Luar Angkasa** (juga karena saya baru saja menonton banyak film fiksi ilmiah klasik akhir-akhir ini).

```
[Prompt]
Tulis puisi pendek tentang eksplorasi luar angkasa.

[Sample AI Response]
Saya harap bintang-bintang akan sejajar
Karena saya bermimpi dan menjelajahi
Di luar apa yang kita lihat,
Dengan pemandangan yang paling menakjubkan
```

Ia pasti menemukan cara untuk memasukkan tema luar angkasa ke dalam responsnya — tidak terlalu tidak alami juga, karena masih mengaitkannya dengan konsep 'emosional' seperti 'mimpi', 'harap', dan 'jelajahi.'

### ✍ Puisi pendek dengan 2x tema

Sekarang saya tahu ia bisa menangani satu tema, mari tambahkan satu lagi ke dalam campuran dan lihat apa yang terjadi. Sesuatu yang _tidak_ biasanya terkait dengan puisi maupun luar angkasa (kita ingin menantang AI, kan?) — bagaimana dengan...

```
[Prompt]
Tulis puisi pendek tentang eksplorasi luar angkasa dan parkour.

[Sample AI Response]
Mengambil bintang-bintang dan mencapai bulan
Takut untuk melihat ke bawah
Dia melompat, melompat, dan mendarat
```

Tidak buruk. Berikut adalah sampel lainnya.

```
[Sample AI Response]
Parkour melalui kosmos
melompat ke bulan dan mendarat dengan moonwalk
mendorong dari Bumi, melakukan headspin
melompat ke Mars, membuatnya terlihat mudah
```

Saya terkesan bahwa bukan hanya memaksa masuk tema parkour, ia menemukan kata-kata dan frasa yang memiliki hubungan alami dengan tema luar angkasa — seperti 'melompat' dan 'moonwalk.'

Pada titik ini, aspek [vektor](https://jalammar.github.io/illustrated-gpt2/) dari model mulai benar-benar mengklik bagi saya.

Seolah-olah ia menemukan [produk silang](https://en.wikipedia.org/wiki/Cross_product) antara vektor 'luar angkasa' dan vektor 'parkour' (ini adalah penyederhanaan yang sangat kasar), dan menerapkan itu ke dalam puisi.

### ✍ Cerita Anak-anak (Bait Berima)

Tugas saya berikutnya adalah mencoba sesuatu yang sedikit lebih terarah. Kali ini saya akan memberikan contoh konkret (dengan nada, struktur, dan cerita) untuk dilanjutkan.

Untuk membuatnya (relatif) mudah bagi AI, saya mulai dengan bait berima, seperti sesuatu dari buku Dr Seuss:

```
[Prompt]
Hari ini cerah.
Dan Milky ingin bermain!
Dia mencari bola nya,
tapi tidak ada di lorong.
```

> Ngomong-ngomong, Milky adalah nama anjing saya, dan ini benar-benar adalah cerita kehidupannya setiap pagi.

Beberapa hasil dari ini sangat menarik. Favorit saya adalah:

```
[Sample AI Response]
Tidak ada di tangga.
Tidak ada di halaman.
Mungkin ada di loteng,
di suatu tempat yang sangat gelap.
```

Ini benar-benar menangkap nada — perhatikan bahwa ia mengulangi "Tidak ada di \_\_\_" tiga kali? Itu seperti apa yang akan dilakukan buku anak-anak!

Ia juga memperkenalkan beberapa kemajuan dan drama ke dalam cerita. Sekarang karakter kita memiliki gagasan di mana bola itu (di loteng), tetapi ada rasa bahaya dan risiko dalam cara (di suatu tempat yang sangat gelap).

Secara struktural, "halaman" dan "gelap" juga berima sebagian, tetapi saya pikir itu mungkin hanya keberuntungan (dari 20 sampel, mungkin hanya 2-3 yang berhasil berima).

Meskipun begitu, saya sangat terkesan dengan hasil ini. Berikut adalah sesuatu lagi yang saya perhatikan juga:

```
[Sample AI Response]
Lalu masuk melalui jendela
terjatuh anjing dengan gonggongan.
Itu Billy, saudaranya.
```

_Anjing!_ Ia menemukan bahwa Milky dalam cerita ini adalah anjing, meskipun itu tidak pernah disebutkan secara eksplisit dalam permintaan. Mungkin itu detail kecil, tetapi saya benar-benar terkesan oleh itu.

### ✍ Fiksi Fantasi

Selanjutnya mari kita uji kemampuan GPT-3 untuk bercerita kreatif juga. Berikut adalah cerita berima dengan sedikit drama, ditulis dalam gaya fiksi tinggi:

```
[Prompt]
Sebuah kutukan misterius melanda tanah,
dan ke dalam hati penduduk desa menyebar.
Satu tautan yang rusak dan malam akan turun,
tidur abadi akan memperbudak mereka semua.

Tapi ada harapan
```

Saya mengakhiri permintaan dengan `Tapi ada harapan` karena saya tertarik untuk melihat apakah AI bisa memprogres (dan menyangkal!) bait sebelumnya, daripada memperpanjang contoh (yang sudah kita tahu bisa dilakukan).

Hasil untuk permintaan ini mungkin yang paling menghibur bagi saya untuk dibaca. Favorit saya:

```
[Sample AI Response]
sebuah ramalan diucapkan,
Yang menceritakan tentang seseorang yang akan mengembalikan matahari.
Dia datang dengan seorang pangeran dan akan memecahkan kutukan,
dan bersama-sama menyelamatkan tanah dari neraka.
```

Begitu banyak hal yang saya suka dari respons ini.

- Ia memperkenalkan _pahlawan wanita_ ke dalam cerita (+1 untuk keragaman gender!)
- Ia menulis kelanjutan yang masuk akal dari permintaan.
- Ia bahkan berhasil berima (antara 'satu/matahari', dan 'kutukan/neraka').

Banyak sampel lainnya juga cukup menarik (cek [di sini](https://github.com/pixegami/gpt-3-poetry-results)) dan penuh ide kreatif.

### ✍ Rap Hacker

Dan terakhir, hanya untuk sedikit bersenang-senang, mari kita lihat apa yang bisa dilakukan dengan rap hacker 🤣 :

```
[Prompt]
Ketika saya mengetik, saya terjebak di layar
Saya melarikan diri ketika basis kode bersih
```

Saya suka karyanya di sini juga. Ia melakukan pekerjaan yang baik dalam memilih struktur (berima) dan konten.

```
[Sample AI Response]
Saya bisa menulis kode, saya bisa menulis sepanjang malam
Kamu adalah kode saya dan saya adalah cahaya kamu
Kita bersama-sama dari senja hingga fajar.
Kita punya keterampilan untuk membuat segalanya berjalan
```

Saya juga menemukan pilihan kata-kata ini menarik:

```
Refaktorisasi itu sukses, bagus!
Dan saya tidak akan melakukan kejahatan yang sama
Jadi saya menguji, menguji, menguji, menguji lagi
Saat saya sudah melihat cukup, itu terjadi lagi
```

"Melakukan kejahatan yang sama" — apakah ia tahu arti kata _commit_ bagi pengembang? 🤯

## Wrap Up

Itu hampir semua yang saya miliki untuk dibagikan kali ini. GPT-3 benar-benar membuat saya terkesan dengan kemampuannya, dan sekarang saya memiliki pemahaman yang lebih kuat tentang bagaimana kekuatan ini bisa digunakan.

Dalam satu batch 20 sampel, tidak semuanya bagus — tetapi yang bagus kadang-kadang benar-benar _sangat_ bagus.

Jika saya ingin menggunakannya dengan cara ini, saya akan membutuhkan proses yang memungkinkan manusia (saya) untuk memilih dan menggunakan sampel terbaik.

Saya harap ini menarik! Saya juga membahas semuanya di video juga (yang saya arahkan kepada penonton yang kurang teknis) yang bisa Anda lihat [di sini](https://www.youtube.com/watch?v=r3zKcL0iGeA&t=47s).

Terima kasih telah membaca!
