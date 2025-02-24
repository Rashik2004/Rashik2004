// num =10;
// if(num>5){
//     console.log("num is greater than 5");
// }
// else{
//     console.log("num is less than 5");
// }

// age = 18;
// if(age>=18){
//     console.log("you are eligible to vote");
// }
// else{
//     console.log("you are not eligible to vote");
// }

// day = "monday";
// switch(day){
//     case "monday":
//         console.log("today is monday");
//         break;
//     case "tuesday":
//         console.log("today is tuesday");
//         break;
//     case "wednesday":
//         console.log("today is wednesday");
//         break;
//     case "thursday":
//         console.log("2 more day to weekend");
//         break;
//     case "friday":
//         console.log("Weakend is near");
//         break;
//     case "saturday":
//         console.log("enjoy your weekend");
//         break;
//     case "sunday":
//         console.log("weekend is over");
//         break;
//     default:
//         console.log("Just another day");
// }

const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter a first number: "));
let num2 = parseInt(prompt("Enter a second number: "));
let num3 = parseInt(prompt("Enter a third number: "));
if(num1>num2 && num1>num3){
    console.log("num1 is the largest number");
}

else if(num2>num1 && num2>num3){
    console.log("num2 is the largest number");
}

else{
    console.log("num3 is the largest number");
}

let year = parseInt(prompt("Enter a your year: "));
if(year%4==0 && year%100!=0 || year%400==0){
    console.log("This is a leap year");
}
else{
    console.log("This is not a leap year");
}

let sub1 = parseInt(prompt("Enter your first subject marks: "));
let sub2 = parseInt(prompt("Enter your second subject marks: "));
let sub3 = parseInt(prompt("Enter your third subject marks: "));
let sub4 = parseInt(prompt("Enter your fourth subject marks: "));
let sub5 = parseInt(prompt("Enter your fifth subject marks: "));
let total = sub1 + sub2 + sub3 + sub4 + sub5;
if(total>=40 && (sub1>=33 && sub2>=33 && sub3>=33 && sub4>=33 && sub5>=33)){
    console.log("Hurray! You are pass");
}
else{
    console.log("Oops! You are fail");
}



