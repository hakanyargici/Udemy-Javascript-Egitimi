// let toplam = 0;

// for(let i = 1; i <= 10; i++) {
//     toplam = i;
// }

// ///////////////////////////////


// let sayilar = [1, 2, 5, 12, 9, 5, 7, 5, 4];
// let doplam = 0;

// for(let i=0; i < sayilar.length; i++) {
//     toplam += sayilar[i]

//     console.log(toplam);
// }

///////////////////////////////

let user = {
    name : "hakan",
    surname : "yargici",
    nickname : "hky",
    password : 123123
};

for (let key in user){
    console.log(user);
    console.log(user[key]);
}