var isim = "Hakan";
var soyad = "Yargıcı";
var yas = 22;
var sehir = "İstanbul";

let mesaj = "Benim adım " + isim + " soyadım " + soyad + '. ' + sehir + '\'da yaşıyorum' + '. ' + (65 - 22) + ' yıl sonra emekli olacağım' + '.';
console.log(mesaj);

//backtick ile String kullanımı
let message = `Benim adım ${isim} soyadım ${soyad}. ${sehir}'da yaşıyorum. ${65-yas} yıl sonra emekli olacağım.`
console.log(message);

//Ternary Oparatörü
let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65-yas) + " yıl kaldı." : "Zaten emekli oldunuz" ;
let text = `Benim adım ${isim} soyadım ${soyad}. ${sehir}'da yaşıyorum. ${emeklilik}`
console.log(text);