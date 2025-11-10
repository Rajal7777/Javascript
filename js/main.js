import { renderTableRow } from "./secondary.js";

let htmlForCarbs = renderTableRow("Carbs", "17g");
let htmlForProtein = renderTableRow("Protein", "19g");
let htmlForFat = renderTableRow("Fat", "5g");

const tbody = document.querySelector("#nutrition-table tbody");
tbody.insertAdjacentHTML("beforeend", htmlForCarbs);
tbody.insertAdjacentHTML("beforeend", htmlForProtein);
tbody.insertAdjacentHTML("beforeend", htmlForFat);


function add(num1, num2 = 3) {
    return num1 + num2;
}

console.log(add(2)); // returns 5
console.log(add(2, 4)); // returns 6

function getUserName(email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserName("ramu@test.com"));

name="javaScript";
console.log(name.charAt(2));


// const properOrder = (name) =>name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    const properOrder = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        }

console.log(properOrder("raMu"));
console.log("mango".slice(1,4)); // ang  the last index is excluded
console.log("mango".substring(1,4));  //
///0 1 2 3 4
///m a n g o

const array = [];

array.push("apple");

console.log(array);

array.push("banana", "grape");

console.log(array);

array[2] = "mango";
// replacing grape with mango
console.log(array);

array.pop();
// removes the last element
console.log(array);
array.shift();
// removes the first element
console.log(array);
array.unshift("kiwi");
// adds an element at the beginning
console.log(array);

array.splice(0,1, "orange");
// at index 0, removes 1 element, adds orange
console.log(array);

array.splice(1,0,"banana","grape");
// at index 1, removes 0 elements, adds banana and grape
console.log(array);

const myArray = ["A", "B", "C", "D", "E"];  
         //  --     0    1    2    3    4
const newArry = myArray.slice(2,4);
console.log(newArry); // C D
console.log(myArray); // original array remains unchanged

const anotherArray = myArray.splice(1,3,"X","Y");
console.log(anotherArray); // B C D
console.log(myArray); // A X Y E

const random = Math.floor(Math.random() * 4);
console.log(random)