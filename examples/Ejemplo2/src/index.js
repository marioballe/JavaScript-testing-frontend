import { convertAge } from "./helpers";

const user1 = {
  name: "Mario",
  city: "Barcelona",
  age: "30"
};
const user2 = {
  name: "Andrés",
  city: "Cali",
  age: "26"
};
const user3 = {
  name: "Alberto",
  city: "Barcelona",
  age: "27"
};
const user4 = {
  name: "David",
  city: "Barcelona",
  age: "26"
};
const user5 = {
  name: "Dani",
  city: "Molins de Rei",
  age: "26"
};
const user6 = {
  name: "Natalia",
  city: "Hospitalet",
  age: "27"
};
const user7 = {
  name: "Nil",
  city: "Barcelona",
  age: "29"
};
const user8 = {
  name: "Jesus",
  city: "Mallorca",
  age: "34"
};
const user9 = {
  name: "Laura",
  city: "Barcelona",
  age: "26"
};
const user10 = {
  name: "Adriana",
  city: "Sant Cugat",
  age: "28"
};

const list = [
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
  user10
];

function getOddAge(age) {
  return age % 2 === 0;
}

let i = 0;

while (i < list.length) {
  list[i].age = convertAge(list[i].age);
  ++i;
}

list.forEach(user => {
  user.age = convertAge(user.age);
});

list.map(user => {
  user.age = convertAge(user.age);
  return user;
});

let oddList = list.filter(user => {
  return getOddAge(user.age);
});

let oddListPrint = "Las edades pares son: ";
oddList.forEach(element => {
  oddListPrint = oddListPrint + element.age + ",";
});

console.log(oddListPrint);
