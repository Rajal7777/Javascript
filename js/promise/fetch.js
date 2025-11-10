{
  /* pending, fulfilled, rejected */
}

{
  /*
const user = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
        //this will run 2nd after the promise is resolve
      console.log(user.name);
    });
  });

//this runs first
console.log(user);
  */
}

{
  /*  ----------------------------------------------------- */
}

{
  /*Async , Await*/
}
//here fetch and response.json retrun the promise so we use promise

{
  /*
const users = {
  userList: []
}

const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data =  await response.json();
    return data
}

const anotherawait = async () => {
  const data = await fetchData();
  users.userList = data;
  console.log("inside anotherwait",data)
}

//it is outside of the async so according to javascript it will run before data get resolve
console.log("from outside", anotherawait())
*/
}

{
  /*  ----------------------------------------------------- */
}

{
  /* 
const getUserEmail = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  const email = data.map((user) => {
    return user.email;
  });
 console.log(email)
  getDataFromAcync(email);
};

//this will return the data after the promise is resolved
// getUserEmail()

//this will give us pending because log is a function and it run befores the response
// console.log(getUserEmail())

//so to get the data
//it will get the data(return email as a parameter)
const getDataFromAcync = (data) => {
  console.log("inside of getData",data);
};
getUserEmail();

*/
}

{
  /*  ----------------------------------------------------- */
}

// fetch 2nd object parameter
//GET method
{
  /* 
const getJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonJoke = await response.json();
  const joke = jsonJoke.joke
  console.log(jsonJoke);
  console.log(joke)
};
getJoke()
*/
}

//post  method
{
  /*
const jokeObj = {
  id: "kalsjdf025161",
  joke: "i wish i have good lot of tons of money",
};

const postData = async () => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });
  const jokeRes = await response.json();
  console.log(jokeRes);
};
postData(); */
}

//get with parameter

const reqJoke = async (firstName, lastName) => {
  const response = await fetch(
    `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
  );
  const jsonResponse = await response.json();
  console.log(jsonResponse.value.joke);
};
reqJoke("Bruce", "Lee");


