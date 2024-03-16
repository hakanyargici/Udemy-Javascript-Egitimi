// HTML etiketlerine ulaşarak js'de değişkenler tarafından bilgilere ulaşıldı.
const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

// Hatalı girdi kontrolü
function error(input, message){
    input.className = 'form-control is-invalid';
    const getDiv = input.nextElementSibling;
    getDiv.innerText = message;
    getDiv.className = 'invalid-feedback';
}

// Doğru girdi kontrolü
function success(input){
    input.className = 'form-control is-valid';
}

// Mail doğruluğu kontrolü
function validateEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if(re.test(input.value)){
        success(input);
    } else{
        error(input, 'Hatalı Bir Mail Adresi Tanımlandı.')
    }
}

// form içerik kontrolü
function checkRequired(validate) {
    validate.forEach(function(input) {
        if (input.value === ''){
            error(input, `${input.id} Gereklidir.`) 
        } else{
            success(input);
        }
        console.log(input.value);
    });
}

function checkLength(input, min, max){
    if(input.value.length < min){
        error(input, `${input.id} en az ${min} karakter kadar olmalıdır.`)
    } else if (input.value.length > max) {
        error(input, `${input.id} en az ${max} karakter kadar olmalıdır.`)
    } else {
        success(input);
    }
}

function checkPassword(input1, input2){
    if(input1.value !== input2.value){
        error(input2, `Parolalar Eşleşmiyor!`);
    } 
    if (input2.value !== input1.value){
        error(input1, `Parolalar Eşleşmiyor!`);
    }
}

// Form çıktısını form ile ilişkilendirme
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([userName, email, password, repassword]);
    validateEmail(email)

    checkLength(userName, 3, 15);
    checkLength(password, 7, 12);
    checkLength(repassword, 7, 12);

    checkPassword(password, repassword);
});