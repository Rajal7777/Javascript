// console.log(19 % 3);  //1
// console.log(10 == 3);  //flase
// console.log(10 !== "10"); // true
// console.log(2 < "10");   //true
// console.log("5" > 2);   //true
// console.log((false && true) || false);  false

//switch
//switch won`t perform type coercion number and string

// switch ("1") {
//     case "1":
//         console.log("happy hack");
//         break;

// }

//case boolean

// switch (0) {
//   case true:
//     console.log("banna");
//     break;
//   case false:
//     console.log("mango");
//     break;
//   default:
//     console.log("water");
// }

// switch (0) {
//   case 1:
//     console.log("Value is one");
//   case 0:
//     console.log("Value is zero");
//   default:
//     console.log("No matching case");
// }

// switch (20) {
//   case 10 + 10:
//     console.log("value is twenty");
//     break;
// }

//here x=0 so it log x=0 then after that it looks for{ x < 10; x++}
// When to use a for loop
//for loop is useful when you know how many times you need to execute a repetitive task.

// for (let x = 0; x < 10; x++) {
//   console.log(x);
// }

//while loop
//while loop is used to run a block of code as long as the condition is true
//use while loop when you dont know how many time to loop

// let i = 0;

// while(i < 5){
//     console.log(`adding ${i} + i++`);
//     i++
// }

// for (let i = 5; i >= 1; i--) {
//   console.log("*".repeat(i));
// }

// for (let i = 1; i <= 5; i++) {
//   console.log("*".repeat(i));
// }

//object

let Books = {
  title: "jungle King",
  story: "Fairy tails",
};
console.log(Books);
console.log(Books.title);
console.log(Books["story"]);

//adding key to a object

Books.drama = "game of thron";
Books["Cartoon"] = "Ben 10";

// console.log(Books);


//deleting the object property
// delete Books.title;
// console.log(Books);


//chicking if it exists
console.log( "story" in Books);
console.log("title" in Books)
