let ürünTelefon = ["iPhone 12", "iPhone 13", "iPhone 14",];
let fiyatTelefon = [20000, 25000, 30000];
let renkTelefon = ["Product(RED)", "Siyah", "Beyaz"];

istek1 = ürünTelefon[0] + " " + renkTelefon[0] + " " + fiyatTelefon[0] + "TL";
istek2 = ürünTelefon[1] + " " + renkTelefon[2] + " " + fiyatTelefon[1] + "TL";
istek3 = ürünTelefon[2] + " " + renkTelefon[1] + " " + fiyatTelefon[2] + "TL";

istek4 = `${ürünTelefon[1]} ${fiyatTelefon[2]}TL ${renkTelefon[0]}`;


console.log(istek1);
console.log(istek2);
console.log(istek3);

console.log(istek4);


let ürün1 = ["iPhone 12", "Siyah", 25000];
let ürün2 = ["iPhone 13", "Gümüş", 25000];
let ürün3 = ["iPhone 14", "Mavi", 35000];

console.log(ürün1)
console.log(ürün2)
console.log(ürün3)



let telefonKombinasyon = [];
telefonKombinasyon[0] = "iPhone 12";
telefonKombinasyon[1] = "Mavi";
telefonKombinasyon[2] = 25000;

console.log(telefonKombinasyon)


let ürünBilgiler = [
    "iPhone18",
    ["Kırmızı", "Siyah", "Mavi"],
    30000
];

istek = ürünBilgiler[0] + ürünBilgiler[1][2] + ürünBilgiler[2]

console.log(istek);