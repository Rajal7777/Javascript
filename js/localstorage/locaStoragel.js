// window.alert(window.location);

const myObj = {
  name: "Rajal",
  todo: ["eat", "eatmore", "eatless"],
  logname: function () {
    console.log(this.name);
  },
};

const myArrray = ["eat", "eatmore", "eatless"];

//session storage it keeps the data until the browser is open
//json only stores the string value
//JSON.stringify converts data to string
//localStorage does not store method(function)

//JSON.parse parse the json formatted string into a data structure that a programming language can work with.
// sessionStorage.setItem("session", JSON.stringify(myArrray));

{
  /*
sessionStorage.setItem("mySessionStorage", myObj);
const sessionData = sessionStorage.getItem("mySessionStorage");
console.log(sessionData); //[object Object]
console.log(typeof sessionData); //string

sessionStorage.setItem("session", JSON.stringify(myObj));

const jsonData = sessionStorage.getItem("session");
console.log(jsonData); // {"name":"Rajal","todo":["eat","eatmore","eatless"]}

const data = JSON.parse(sessionStorage.getItem("session"));
console.log(data); //{name:"rajal","todo":["eat","eatmmore","eatless"][[ProtoType]]:Object}

const jsonData = sessionStorage.getItem("session");
console.log(jsonData); //["eat","eatmore","eatless"]
const data = JSON.parse(sessionStorage.getItem("session"));
console.log(data); //['eat', 'eatmore', 'eatless']  */
}

localStorage.setItem("localStore", JSON.stringify(myObj));

//delete item from localstorage
localStorage.removeItem("localStore");

//clear all data stored 
// localStorage.clear()

//delete data from key
// localStorage.length -->for finding length

 
const myLocalData = JSON.parse(localStorage.getItem("localStore"));
console.log(myLocalData);



