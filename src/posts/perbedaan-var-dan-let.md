---
title: "Perbedaan var dan let di JavaScript"
subtitle: "Pahami perbedaan antara var dan let di JavaScript"
date: "2024-4-10"
minRead: "2"
category: "Teknologi"
---

Ketika bekerja dengan JavaScript, seringkali kita menggunakan `var` dan `let` untuk mendeklarasikan variabel. Meskipun keduanya memiliki fungsi yang mirip, namun terdapat perbedaan penting dalam cara mereka bekerja. Dalam artikel ini, kita akan membahas perbedaan antara `var` dan `let` serta kapan kita sebaiknya menggunakan masing-masing.

## 1. Lingkup (Scope)

Perbedaan utama antara `var` dan `let` terletak pada lingkup variabel yang mereka deklarasikan. Variabel yang dideklarasikan dengan `var` memiliki lingkup fungsional (function scope), yang berarti variabel tersebut hanya terlihat di dalam fungsi tempat mereka dideklarasikan. Di sisi lain, variabel yang dideklarasikan dengan `let` memiliki lingkup blok (block scope), yang berarti variabel tersebut hanya terlihat di dalam blok tempat mereka dideklarasikan.

### Contoh:

```
javascript
function exampleFunc() {
    if (true) {
        var varVariable = "Ini adalah variabel var";
        let letVariable = "Ini adalah variabel let";
    }
    console.log(varVariable); // Output: Ini adalah variabel var
    console.log(letVariable); // Error: letVariable is not defined
}
exampleFunc();
```
