let ogrenciler = ["çınar","yiğit","ada"];
sonuc = ogrenciler.length;  //Küme içindeki değerlerin sayısı

//String Metodları
sonuc = ogrenciler.toString(); // Küme içinde bulunan değerleri çıkartır
sonuc = ogrenciler.join(" "); // Küme içindeki değerleri çıkartırken aralarına "" arasında bulunan ifadeyi koyar

//Eleman Silme
sonuc = ogrenciler.pop(); // Son eleman silinir.
sonuc = ogrenciler.shift(); // İlk eleman silinir.

//Eleman Ekleme
sonuc = ogrenciler.push("sena"); // Diziin sonuna elemanı ekler
sonuc = ogrenciler.unshift("sena"); // Diziin başına elemanı ekler

// Kümeleri Birleştirme
let markalar1 = ["Citroen","Renault","Peugeout"];
let markalar2 = ["Porsche","Mercedes","BMW"];
let markalar3 = ["Toyata","Nissan","Suzuki"];

sonuc = markalar1.concat(markalar2,markalar3); // .concat() methodu ile kümeler birleşir.
// sonuc = markalar1.splice(0, 9, markalar2, markalar3);


console.log(ogrenciler);
console.log(sonuc);

