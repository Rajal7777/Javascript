// import play from "./child.js";
// import { dinner as food, anime } from "./child.js";

// console.log(play());
// console.log(food());
// console.log(anime());
//if there is default function then need to state default

//this will give the error fun.play is not a function
// console.log(fun.play());

import * as fun from "./child.js";
import  User from './user.js'

const ram = new User ("Ram", 25)
console.log(ram)  // User { name:"Ram", age: 25}
//lets call the greeting() from our User class
console.log(ram.greeting()) // hi my name is Ram

console.log(fun.default());
console.log(fun.dinner());
console.log(fun.anime());
