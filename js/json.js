const myObj = {
    name: "Mike Tyson",
    year: "1995",
    food: ["banana", "egg", "beer"]

}

console.log(typeof myObj);
const newjson = JSON.stringify(myObj)
console.log(newjson)
console.log(typeof newjson)

const parsejson = JSON.parse(newjson)
console.log(parsejson.name)