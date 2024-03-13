// ** Oparötörler ** //
let sonuc;
let a = 10, b = 20, c = 30, d = 42;

// 1- Aritmatik Opörötörleri

sonuc = a + b;
sonuc = b - c;
sonuc = b * a;
sonuc = c / a;

sonuc = d % a;
sonuc = a++; //a + 1
sonuc = ++a; //1 + a
sonuc = a--; //a - 1
sonuc = --a; //1 - a

// 2- Atama Opörötörleri
sonuc = a // üst tarafta "a" ile yapılan işlemleri yaparak değeri atar

sonuc += a // sonuc + a ifadesini temsil eder
sonuc -= a // sonuc - a ifadesini temsil eder
sonuc *= a // sonuc * a ifadesini temsil eder
sonuc /= a // sonuc / a ifadesini temsil eder
sonuc %= a // sonuc % a ifadesini temsil eder

// 3- Karşılaştırma Opörötörleri 
sonuc = (a == b) //boolean olarak eşitlik kontrolü sağlar
sonuc = (a != b) 
sonuc = (a === "3") // Değer ve Tip(Number/String) kontrollerini sağlar
sonuc = (a > b) 
sonuc = (a < b) 
sonuc = (a >= b) 
sonuc = (a <= b) 


console.log (sonuc);