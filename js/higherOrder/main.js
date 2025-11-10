//higher order function
//it takes at least
//1> take 1 or more function as argument {parameter}
//return function as result

import { posts } from "./post.js";

//forEach()

posts.forEach((post) => console.log(post));
console.clear();

//filter
const filterdPost = posts.filter((post) => {
  return post.userId === 98;
});
console.log(filterdPost);


//map
const mapPost = filterdPost.map((post) => {
  return  post.id + 1
});
console.log(mapPost)

//reduce
//sytnax --> array.reduce((accumulator, value), initialvalue )
const reducedValue = mapPost.reduce((sum, post) => {
    return sum + post
},1)
console.log(reducedValue);