const myObj = { name: "Rajal" };
console.log(myObj);

const obj = {
  enjoy: true,
  number: 12,
  hobbies: ["eat", "drink", "money"],
  beverage: {
    morning: "coffee",
    night: " ashahi",
  },
  action: function () {
    return `Time for morning ${this.beverage.morning}`;
  },
};

console.log(obj.enjoy); //true
console.log(obj["enjoy"]); // ture
console.log(obj["beverage"]); //  beverage: {morning: "coffee",night: " ashahi"}
console.log(obj.beverage.morning);
console.log(obj.hobbies[0]);
console.log(obj.action());

const vehicle = {
  wheels: 4,
  brand: function () {
    return "Toyote";
  },
};

const newVehicle = Object.create(vehicle);
newVehicle.doors = 4;
console.log(newVehicle);
//inheritance
console.log(newVehicle.wheels)

const band = {
    vocals: "Brayn Admas",
    guitar: "jimmy",
    bass: "jhon",
    drums: "shen",
}
console.log(Object.keys(band));
console.log(Object.values(band));

for (let role in band) {
    console.log(`${role} ${band[role]}`)
}

function sing({vocals}) { return ` ${vocals} `}
console.log(sing(band))
