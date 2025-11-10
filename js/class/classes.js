// class Ramen {
//     constructor(flavour) {
//         this.type = flavour;
//         this.name = "tonkotu";
//         this.ingredient = "moyasi";
//     }
//     eat() {
//        console.log( `ramen with ${this.type} ${this.name}  with ${this.ingredient}`);
//     }
// }

// const order = new Ramen("spicy");
// order.eat();

class Ramen {
    constructor(spicy,flavour) {
        this.type = spicy;
        this.name = flavour;
        this.ingredient = "moyasi";
    }
    eat() {
       console.log( `ramen with ${this.type}spicy ${this.name}  with ${this.ingredient}`);
    }
}

const order = new Ramen("normal", "miso");
order.eat();
console.log(order.ingredient)