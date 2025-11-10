export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hi my name is ${this.name}`;
  }
}
