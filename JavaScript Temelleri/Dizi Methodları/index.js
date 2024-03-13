// 1- "Elma, Armut, Muz, Çilek" elemanlarına sahip dizi oluşturun.
    // 1.1 Dizi kaç elemanlıdır ? 
    // 1.2 Dizinin ilk ve son elemanı nedir ?
    // 1.3 Elma dizinin bir elemanı mı ? 
    // 1.4 Kiraz meyvesini listenin sonuna ekleyiniz. 
    // 1.5 Dizinin son 2 elemanını siliniz.
const meyveler =["Elma","Armut","Muz","Çilek"];
// 1-
let eleman = meyveler.length; 
console.log(eleman);

// 2-
console.log(meyveler[0]);
console.log(meyveler[meyveler.length -1]);

// 3-
let apple = meyveler.includes("Elma");
console.log(apple);

// 4-
let addMeyveler = meyveler.push("Kiraz");
console.log(meyveler);

// 5-
// meyveler.pop();
// meyveler.pop();

meyveler.splice(meyveler.length -2, 2);
console.log(meyveler);

// 2- Aşağıdaki bilgierli dizi içreisinde saklayınız. Her öğrencinin yaşını hesaplayınız ve no ortalmasını.
    /*
        Öğrenci 1: Yiğit Bilgi 2010 (70.60.80)
        Öğrenci 2: Ada Bilgi 2012 (80.80.90)
        Öğrenci 3: Ahmet Turan 2009 (60.60.70)
    */


const studentInfo1 =[
    "Yiğit",
    "Bilgi",
    2010,
    [70,60,80]
];

const studentInfo2 =[
    "Ada",
    "Bilgi",
    2012,
    [80,80,90]
];

const studentInfo3 =[
    "Ahmet",
    "Turhan",
    2009,
    [60,60,70]
];

let studentInfo = [studentInfo1, studentInfo2, studentInfo3];

let age = new Date().getFullYear() - studentInfo[0][2];
console.log(age);

let ortalama1 = (studentInfo[0][3][0] + studentInfo[0][3][1] + studentInfo[0][3][2]) / 3;
let ortalama2 = (studentInfo[1][3][0] + studentInfo[1][3][1] + studentInfo[1][3][2]) / 3;
let ortalama3 = (studentInfo[2][3][0] + studentInfo[2][3][1] + studentInfo[2][3][2]) / 3;

console.log(ortalama1.toFixed(1), ortalama2.toFixed(1), ortalama3.toFixed(2));