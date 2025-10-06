import { users } from "./user.mjs";

function render(users) {
  if (!users) {
    throw " No Users";
  }

  const list = users
    .map((user) => {
      return `<li>${user.name}(<a href="email:${user.email}">${user.email}</a></li>)`;
    })
    .join("");
  return `<ol>${list}</ol>`;
}

const container = document.querySelector(".con");
try {
  container.innerHTML = render(users);
} catch (error) {
  container.innerHTML = error;
}
