let users;

 const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  users = await response.json();
  console.log(users)


 export { users };
