'use strict'
const person = {
    age: 42,
    height: 178,
    weidht: 56,
    firstName:"Alexey" ,
    lastName: "Kovalev" ,
    address: {
    city: "Taganrog",
    street: "Petrovskay",
    house: 78,
},
    body: {
        anchor: {
            leaflet:  {
            value: '1',
        },
    },
},
address1: {
    city1: "Taganrog1",
    street1: "Petrovskay1",
    house1: 53,
},
};
let result1 = ["{"]; 
let counter = 1; 

function recursion(person1, counter1) {
  for (const [key, value] of Object.entries(person1)) {
    if (typeof value !== "object") {
      result1.push("  ".repeat(counter1) + `${key}: ${value}`);
    } else {
      result1.push("  ".repeat(counter1) + `${key}: {`);

      recursion(value, counter1 + 1);

      result1.push("  ".repeat(counter1) + `}`);
    }
  }
}
recursion(person, counter);
result1.push("}");
for (let i = 0; i < result1.length; i++) {
  console.log(result1[i]);
}

