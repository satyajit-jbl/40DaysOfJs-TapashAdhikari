// let number = 40;

// if (number>60){
//     console.log("Aged")
// }
// else if (number >90){
//     console.log("okd")
// }
// else {
//     console.log("young")
// }
console.log(new Date().getDay())
let day =0;
switch(new Date().getDay()){
    case 0: day = "sunday"; break;
    case 1: day = "MOnday"; break;
    case 2: day = "Tuesday"; break;
    case 3: day = "Wednesday"; break;
    case 4: day = "Thursday"; break;
    case 5: day = "Friday"; break;
    case 6: day = "Saturday"; break;
    default: console.log("Nothing is matched")
}
console.log("Today is ", day)

//task-1
//result: It's a normal day, as js is case sensitive Monday not equal to    monday

//task-2
// let amount = 1302
// if(amount>0 && amount % 100 ===0){
//     console.log("“Withdrawal successful”")
// }
// else {
//     console.log("“Invalid amount”")
// }

//task-3
// let a = 5;
// let b = 9;
// let operator = prompt("enter an operator (+,-,*,/)");

// switch(operator){
//     case '+': result = a+b; break;
//     case '-': result = a-b; break;
//     case '*': result = a*b; break;
//     case '/': result = a/b; break;
// }
// console.log(result)

//task-4
// let age = prompt("enter your age");
// if (age<18){
//     console.log("price is $3")
// }
// else if (age >=18 && age <60){
//     console.log("ticket price is $10")
// }
// else {
//     console.log("ticket price is $8")
// }

//task -5

// let month = prompt("enter your birth month")
// switch(month){
//     case "january": console.log("Jodiac sign is Areas"); break;
//     case "february": console.log("Jodiac sign is Taurus"); break;
//     default: console.log("No month matched")
// }

//task-6
let side1 = prompt("enter side1 of triangle")
let side2 = prompt("enter side2 of triangle")
let side3 = prompt("enter side3 of triangle")

if(side1 === side2 && side2 === side3 && side1 === side3 ){
    console.log("Equilateral Triangle")
}
else if(side1 === side2 || side2 === side3 || side1 === side3){
    console.log("Isosceles Triangle")
}
else {console.log("Scalene Triangle")}