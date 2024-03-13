let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirme Kursu";

// 1- URL Kaç Karakterlidir ?

let charset = kursAdi.length;
console.log(charset);

// 2- Kurs adı kaç kelimeden oluşur ?

let letter = kursAdi.split(" ").length;
console.log(letter);

// 3- url HTTPS ilemi başlıyor ?

start = url.startsWith("https");

if (start) {
    console.log("HTTPS İLE BAŞLIYOR");
}

// 4- kursAdi içerisinde Eğitimi kelimesi varmı ?

if (kursAdi.indexOf("Eğitimi") > -1) {
    console.log("evet var");
}
else{
    console.log("hayır yok");
}

// 5- URL ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturun

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ","-");

sonuc =`${url}/${kursAdi}`;
console.log(sonuc);

// https://www.sadikturan.com/Komple-Web-Geliştirme-Kursu