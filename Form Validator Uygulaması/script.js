// HTML etiketlerine ulaşarak js'de değişkenler tarafından bilgilere ulaşıldı.
const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

// Hatalı bilgi kontrolü
function error(input, message){
    input.className = 'form-control is-invalid';
    const getDiv = input.nextElementSibling;
    getDiv.innerText = message;
    getDiv.className = 'invalid-feedback';
}

// Doğru bilgi kontrolü
function success(input){
    input.className = 'form-control is-valid';
}

function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
}

// input içerik kontrolü ve ux bildirim
form.addEventListener('submit', function(e){
    e.preventDefault();

    if(userName.value === ''){
        error(userName, 'Kullanıcı Adı Gerekli');
    } else{
        success(userName);
    }

    if(email.value === ''){
        error(email, 'Email Adresi Gerekli');
    } else if(!validateEmail(email.value)){
        error(email, 'Hatalı mail adresi');
    }
    else{
        success(email);
    }

    if(password.value === ''){
       error(password, 'Şifre Gerekli');
    } else{
        success(password);
    }

    if(repassword.value === ''){
        error(repassword, 'Şifre Gerekli');
    } else if(repassword.value != password.value){
        error(repassword);
        console.log("Şifreler Eşleşmiyor.");
    } else{
        success(repassword);
    }
});