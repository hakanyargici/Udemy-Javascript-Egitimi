// varible & değişken //
// Geçici olarak atanılan değerleri temsil eder. Bilgisiyarın hafızasında saklanır. //
// Türkçe karakter kullanılmamalıdır. Değişken sayı ile başlayamaz. Arada boşluk olmaz //

var maasAli = 3000;
var maasCan = 4000;
var maasZey = 5000;

console.log (maasAli + (500 * 0.3)); //maaş ali
console.log (maasCan + (1000 * 0.3)); //maaş mustafa
console.log (maasZey + (1500 * 0.3)); //maaş ümit 


//** varible & değişken türleri **//
// let ve var değişkenleri temsil eder. Aralarında fark yoktur. //
// String harfleri temsil ederken sayılsal bir işlemi yaptırmaz. var değişkenadi = "değer";//
// Number sayıları temsil ederek sayılsal bir işlem yaptırır. var değişkenadi = değer;//
// typeof ile atınalan değişkenin String yada Number değerini tanımlatır. console.log (typeof değişkenadi); //
// Boolean ile çeşitle sayısal işlemler ile true ve false değerlerine ulaşabiliriz.//



var phone = "iphone13"; //String
let price = 100; // Number

console.log (phone + price);
console.log (typeof phone); // sonuç string çıkar 
console.log (typeof price); // sonuç number çıkar

// ***************************************************** //

let number1 ="100"; // String
let number2 =200; // Number

console.log (Number(number1) + Number(number2));
console.log (Number(number1) + number2.toString()); 

let isim = "hakan";
let soyad = "yargici";

console.log (isim + soyad);
console.log (isim + " " + soyad);

// ***************************************************** //

let sinavNotu = 50;
let basarilimi = (sinavNotu > 50);

console.log (basarilimi);

let sinavPuani = 50;
let sonuc = (sinavPuani >= 50);

console.log (sonuc);


