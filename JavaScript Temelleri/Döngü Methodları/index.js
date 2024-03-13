let sayilar = [1, 3, 5, 7, 15, 25, 2,4];

// 1- Sayılar listesindeki her bir sayının karesini yazdırın.

// for(let sayi of sayilar){
//     console.log(sayi*sayi);
// };

// 2- Sayılar listesindeki hangi sayılar 5'in katıdır ?

// for(let i=0; i<sayilar.length; i++) {
//     if(sayilar[i] % 5 == 0) {
//         console.log(sayilar[1]);
//    };
// };

// 3- Sayılar listesindeki çift sayıların toplamı

// let toplam = 0;
// for(let i in sayilar) {
//     if (sayilar[i] % 2 == 0) {
//         toplam += sayilar[i];
//     }
// }

// console.log(toplam);

let urunler = ["iPhone 11", "iPhone 12", "iPhone 13", "Samsung S21", "Samsung S22"];

// 4- Ürünler listesindeki tüm ürünleri büyük harf ile yazdırın.

// for(let urun of ürünler){
//     console.log(urun.toUpperCase());
// }


// 5- Ürünler listesinde "Samsung" geçen kaç ürün var ?

// let adet = 0;

// for (let urun of urunler) {
//     if(urun.includes("Samsung")){
//         adet++
//     }
// };

// console.log(adet);

let ogrenciler = [
    {ad:"Yiğit", soyad:"Bilgi", notlar:[60, 70, 60]},
    {ad:"Hakan", soyad:"Yargıcı", notlar:[80, 70, 80]},
    {ad:"Sadık", soyad:"Turan", notlar:[70, 70, 60]}
];

// 6- Öğrenciler listesindeki her öğrencinin not ortalması ve başarı durumunu yazdırın.
let adet = 0

for(let ogrenci of ogrenciler) {
    let not_toplam = 0;
    let ortalama = 0;
    let adet = 0;
    for(let not of ogrenci.notlar) {
        not_toplam += not;
        adet++;
    }
    ortalama = not_toplam + adet;
}

console.log(`${ogrenci.ad} ${ogenciogrenci.soyad} isimli öğrencinin not ortalaması: ${ortalama} `)

if(ortalama >= 50){
    console.log(basarili);
} else{
    console.log(basarisiz);
}

// 7- Tüm öğrencilerin not ortalaması kaçtır ?