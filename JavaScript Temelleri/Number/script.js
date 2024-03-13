let sonuc;
sonuc = "10";
sonuc = Number("10");

// Number - Parse Bilgisi
sonuc = parseInt("10.6"); // Ondaklıklı olarak sayıyı çıkarmaz
sonuc = parseFloat("10.6"); // Ondaklıklı olarak sayıyı çıkarır
sonuc = parseInt("a10"); // Sayı tanımlanmaz
sonuc = parseInt("10a"); // Sayı tanımlanır, harf gözükmez

sonuc = isNaN("a10"); // Boolean biçimde NaN olup olmadığı tanımlanır

// **********************************

let sayi = 10.5145235;

sonuc = sayi.toPrecision(5); 
sonuc = sayi.toFixed(5); 

// Number - Math Bilgisi

sonuc = Math.round(2.6); // Sayıyı x.5 baz alınarak yuvarlar
sonuc = Math.ceil(2.4); // Sayının ondalıklı kısmı farketmeksizin üstündeki tam sayı değerini verir
sonuc = Math.floor(2.6); // Sayının ondalıklı kısmı farketmeksizin tam sayı değeri verir
sonuc = Math.sqrt(9); // Sayının "karekökünü" alır
sonuc = Math.pow(2,4); // Sayının "üstünü" alır. "Virgül" ile belirtilir.
sonuc = Math.abs(-26); // Sayının "mutlak değerini" alır.
sonuc = Math.min(2,4,6,8,12); // Sayı dizinin en düşük değerini alır
sonuc = Math.max(2,4,6,8,12); // Sayı dizinin en büyük değerini alır


console.log(typeof sonuc);
console.log(sonuc);