let tarih = new Date(); // Anlık olarak gün  ve saat bilgilisini alır

// Get Methotları

sonuc = tarih.getDate(); // Gün bilgisini yansıtır
sonuc = tarih.getDay(); // 0: Pazar, 1: Pazartes, 2: Salı, 3: Çarşamba, 4: Perşembe, 5: Cuma, 6: Cumartesi olmaz üzere 0 - 6 arası digit değer ile günü yansıtır
sonuc = tarih.getFullYear(); // Yıl bilgisini yansıtır
sonuc = tarih.getHours(); // Saat bilgisini yansıtır
sonuc = tarih.getTime(); // ms olarak yansıtan saat değeri

// Set Methotları

tarih.setFullYear(2001);
tarih.setMonth(5); // 0: Ocak, 1: Şubat, ....
tarih.setDate(25);

sonuc = tarih;

// **************   DOĞUM GÜNÜ      **********************

let dogumTarihi = new Date(2001, 5, 25);
 
yilBilgisi = tarih.getFullYear() - dogumTarihi.getFullYear();

sonuc = yilBilgisi

console.log(sonuc);