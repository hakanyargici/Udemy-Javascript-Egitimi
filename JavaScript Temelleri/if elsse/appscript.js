// **********  if else ve Operatöleri Kullanarak Yapılcak Uygulamalar ********** //    
// 1- Sayının 10 - 50 arasında olup olmadığını kontrol eden uygulama
    let a = 20

    if (a >= 10 && a <= 50) {
        console.log("success")
    }
    else {
        console.log("wrong")
    }
// 2- Bir sayının pozitif tek bir sayı olup olmadığını kontrol eden uygulama 
    let b = 20;

    if (b % 2 == 1 && b > 0){
        console.log("tek potizitf")
    }
    else{
        console.log("çift pozitif")
    }
// 3- x, y, z sayılarının büyüklüklerini karşılaştıran uygulama yapınız
    let x = 70, y = 60, z = 20;

    if (x > y && x > z){
        console.log("x en büyük sayı");
    } else if (y > x && y > z){
        console.log("y en büyük sayı")
    } else if (z > x && z > y){
        console.log("z en büyük sayı")
    }
// 4- 2 Vize %40 ve 1 Final %60 notuna göre hesaplanan ortalama için
    // a- Eğer ortalama 50 ve üstündeyse geçti, altındaysa kaldı
    // b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
    // c- Finalden 70 alındığında ortalama 50'nin altında olsa bile dersten geçsin

    let vize1 = 30, vize2 = 40, final = 69;
    let ortalama = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6);
    console.log(ortalama);

    if (ortalama >= 50 && final <= 50 || final == 70 ){
        console.log("geçti")
    }
    else{
        console.log("kaldın")
    }
    
