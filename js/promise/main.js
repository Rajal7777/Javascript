const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("yes! we get the resolve");
  } else {
    reject("no! we got the error");
  }
});


//getting the resolve data
// myPromise
// .then(value => {
//     //modifing the data/value
//   return value + " ==> got you"
// })
// .then(newValue => {
//    console.log(newValue)
// })
// .catch(err => {
//     console.log(err)
// })

const  nextPromise = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve("yes nextPromise resolved")
    }, 3000)
})

myPromise
.then(value => {
    console.log(value)
})

nextPromise
.then(resolve => {console.log(resolve)})