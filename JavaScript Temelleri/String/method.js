let kursAdi = "Sıddık Duran Uygulamalı Javascript Geliştirme Kursu";
let sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();

sonuc = kursAdi.length;
sonuc = kursAdi[1];

sonuc = kursAdi.slice(0,6);
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10,-5);

sonuc = kursAdi.substring(0,6);
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Uygulamalı","Web");

sonuc = kursAdi.trim();
sonuc = kursAdi.trimStart();
// sonuc = kursAdi.trimEnd();


console.log(sonuc);