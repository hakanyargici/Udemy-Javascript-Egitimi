// Objects(Objeler) dizilerin içine atanılan değerleri tanımlamakta kullanılır. 

let userInfo = [
    {
        userName:"hakanyargici",
        userPassword:"yarigicihakan",
        userCity:"Istanbul",
        userGrad:"Universite",
        userContact: {
                phone: 5456509460,
                socialMedia: {
                    ınstagram: "yudusko",
                    twitter: "yudubey"
                }
        },
        userHoby: {
                computerGame:"Elden Ring",
                singer:"Tarkan",
                movie:["Fast And Furios 1","Fast And Furious 2","Fast And Furious 3"]
        }
    },
    {
        userName:"sıddıkturhan",
        userPassword:"turhansıddık",
        userCity:"Istanbul",
        userGrad:"Yüksek Lisans",
        userContact: {
                phone: 5323177199,
                socialMedia: {
                    ınstagram: "turhansıddık",
                    twitter: "sıddıktr"
                }
        },
        userHoby: {
                computerGame:"God Of War",
                singer:"Cem Karaca",
                movie:["Fast And Furios 4","Fast And Furious 5","Fast And Furious 6"]
        }
    }
];

let sonuc

// sonuc = userInfo;
// sonuc = userInfo.userName;
// sonuc = userInfo["userCity"]
// sonuc = userInfo.userHoby.singer
// sonuc = userInfo.userContact.socialMedia.ınstagram

sonuc = userInfo[1];
sonuc = userInfo[1].userGrad;

console.log(sonuc);

