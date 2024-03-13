//             PROGRAM AMACI            //
// 2 öğrencinin ortalama sınav notunu hesaplayan sistem //

let ogrenci1Ad = "Ada";
let ogrenci1Soyad = "Sevim";
let ogrenci1Tarih = 2010;
let ogrenci1Yasi = 14;
let ogrenci1Not_1 = 70;
let ogrenci1Not_2 = 70;
let ogrenci1Not_3 = 80;

var notlar1 = (ogrenci1Not_1 + ogrenci1Not_2 + ogrenci1Not_3);
var ortalama1 = (notlar1 / 3 );
var sonuc1 = (ortalama1 > 50)

console.log (ogrenci1Ad + " " + ogrenci1Soyad + " " + ogrenci1Yasi + " " + sonuc1);

let ogrenci2Ad = "Yiğit";
let ogrenci2Soyad = "Balci";
let ogrenci2Tarih = 2012 ;
let ogrenci2Yasi = 12;
let ogrenci2Not_1 = 40;
let ogrenci2Not_2 = 50;
let ogrenci2Not_3 = 40;

var notlar2 = (ogrenci2Not_1 + ogrenci2Not_2 + ogrenci2Not_3);
var ortalama2 = (notlar2 / 3)
var sonuc2 = (ortalama2 > 50);

console.log (ogrenci2Ad + " " + ogrenci2Soyad + " " + ogrenci2Yasi + " " + sonuc2);
