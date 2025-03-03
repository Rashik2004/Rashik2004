// console.log("THIS IS A NEW FILE");
let i=10;
while(i<5){
    console.log("Output ",i);
    i++;
}

// for( i=0; i < 5;i++){
//     console.log("Result",(i));
// }

// for( i=0; i < 10;i++){
//     if(i==5) break;
//     console.log("Result",(2*i));
// }

// //continue statement
// for (i=0;i<6;i++) {
//     if(i==2) continue;
//     console.log("Result",(i));
// }
// sum = 0;
// for (let i = 0; i <= 100; i++) {
//     if(i%2==0){
//         sum+=i;
//     }
// }
// console.log("sum of even numbers: ",sum);
// num = 0;
// do {
//     num = prompt("Enter a number:");
//     if (isNaN(num)) {
//         console.log("Invalid input. Please enter a valid number.");
//         break; // Skip to the next iteration if input is invalid
//     }
//     console.log("Entered number: ", num);
// }while (num >= 0);

// x=9;
// for(i=1;i<=10;i++){
//     console.log(x,"*",i,"=",x*i);
// }

// let b =  prompt("Enter a number:");
// for(i=b;i>=0;i--){
//     console.log(i);
// }

// objects in a javascript
// person={
//     name:"rashik",
//     age:21,
//     city:"Jamshedput",
//     country:"India"
// };
// // console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);
// console.log(person.country);

// //crating an person object using constructor
// person = new Object();
// person.name = "Ashmit";
// person.age = 20;
// person.city = "Bokaro";
// person.country = "India";
// console.log(person);

// console.log(person["age"]);

// //function inside
// person = {
//     name: "Rashik",
//     age: 21,
//     city: "Jamshedpur",
//     country: "India",
//     display: function () {
//         return this.name + " " + this.age + " " + this.city + " " + this.country;
//     }
// };

//creating object car and update the object
car = {
    name: "BMW",
    model: "X5",
    color: "Black",
    display: function () {
        return this.name + " " + this.model + " " + this.color;
    }
};
console.log(car.display());
car.color = "White";
car.model = "M4 CS";
console.log(car);
delete car.color;
console.log(car);

