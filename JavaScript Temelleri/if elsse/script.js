var username = "hakanyargici";
var password = "xd123asdxd";

if (username == "hakanyargici"){
    if(password == "xd123asdxd"){
        console.log("Uygulamaya Giriş Başarılı");
    }
    else{
        console.log("Şifre Hatalı");
    }
}
else{
    console.log("Kullanıcı Adı Hatalı");
}

///////////////////
// Yaşın 18 Ve Üstü Olması, Minimum Lise Diploması Olması

// 1. Öğrenci
var mezuniyet = "lise";
var yas = "18";
    

if (yas >= 18 && (mezuniyet == "yüksekokul" || mezuniyet == "lise")) {
    console.log("Başarılı...");
}
else{
    console.log("Lise mezunu ve 18 yaşınızı doldurmanız lazım.");
}