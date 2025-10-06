// import { sayHi as hi } from "./greeting.js";
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   hi();
// });

// import { sayHi } from './greeting';

//importing greeting.js dynamically

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   import("./greeting.js")
//     .then((greeting) => {
//       greeting.sayHi();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

//also
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", async () => {
//   try {
//     let greeting = await import("./greeting.js");
//     greeting.sayHi();
//   } catch (error) {
//     console.log(error);
//   }
// });

//object destructuring
const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  try {
    const { sayHi, bye } = await import("./greeting.js");
    sayHi();
    // bye();
  } catch (error) {
    console.log(error);
  }
});
