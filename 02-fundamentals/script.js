'use strict'
const deeznutification = a => a + " deez nuts"
console.log(deeznutification("sanka"))

// const calcAverage = (score1,score2,score3) => (score1 + score2 + score3) / 3;
// const scoreDolphins = calcAverage(10,20,30);
// const scoreKoalas = calcAverage(50,20,30);
// function checkWinner(avgDolphins, avgKoalas) {
//     if(scoreKoalas > scoreDolphins) console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//     else if (scoreDolphins > scoreKoalas) console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//     else console.log("No team wins...")
// }
// checkWinner(scoreDolphins, scoreKoalas)

const calcTip = function(bill){
    if(bill > 50 && bill < 300) return bill * 0.15
    else return bill * 0.2
}
// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills)
// console.log(tips)
// console.log(totals)
const man = {
    firstName: "Jonas",
    friends: ["Michael", "Peter", "Steven"],
    driversLicense: true,
    birthYear: 2005,
    profession: "teacher",
    calcAge: function(){
        this.age = 2024 - 2005;
        return this.age;
    },
    getSummary: function(){
return `${this.firstName} is a ${this.calcAge()}-year old ${this.profession}, and he has ${this.driversLicense ? "a" : "no"} drivers license!!`
    }
};
console.log(`${man.firstName} has ${man.friends.length} friends, and his best friend is called ${man.friends[0]}`);
man.twitter = "@luckasonic";
console.log(man);
man.calcAge();
console.log(man.getSummary())
/* Write your code below. Good luck! 🙂 */

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
       this.bmi = this.mass / (this.height*this.height);
       return this.bmi
    }
};
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
       this.bmi = this.mass / (this.height*this.height);
       return this.bmi
    }
};
john.calcBMI() > mark.calcBMI() ? console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than  ${mark.fullName}'s (${mark.bmi})`) : console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than  ${john.fullName}'s (${john.bmi})`)

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for(let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}
console.log(tips);
console.log(totals);
const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++) sum += arr[i];
    sum / arr.length;
}