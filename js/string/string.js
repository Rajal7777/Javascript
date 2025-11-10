const fruit = "Apple";

//string methods
console.log(fruit.charAt(0)); //A

//index method
console.log(fruit.indexOf("e")); //1

//slice method
console.log(fruit.slice(0, 3)); //App
//if we dont provide the endParameter it will be slice(0, fruit.length)
console.log(fruit.slice(0)); //Apple

//lower and upper character
console.log(fruit.toLowerCase()); //apple
console.log(fruit.toUpperCase()); //APPLE

//includes method { this will return a boolean value}
console.log(fruit.includes("p")); //true
console.log(fruit.includes("z")); //false

{
  /* next section   */
}

const letter = "mathematics";

//split method
console.log(letter.split("e")); // ['math', 'matics']
console.log(letter.split("")); // ['m', 'a', 't', 'h', 'e', 'm', 'a', 't', 'i', 'c', 's']

const letter2 = "every day i learn new thing";
//in this case after each space it will give us a new string
console.log(letter2.split(" ")); //['every', 'day', 'i', 'learn', 'new', 'thing']