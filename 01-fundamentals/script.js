console.log("sanka is bomzh without internet omg this course has vibes of Hlyba")
//challenge 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massMark / (heightMark * heightMark);
console.log(BMIMark,BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
if(markHigherBMI){
    console.log(`Mark's BMI ${"("+BMIMark+")"} is higher than John's ${"("+BMIJohn+")"}!`);
} else{ 
    console.log(`John's BMI ${"("+BMIJohn+")"} is higher than Mark's ${"("+BMIMark+")"}!`);
}
const bill = Number(prompt());
let tip;
bill >= 50 && bill <= 300 ? tip = bill*0.15 :tip = bill*0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`)