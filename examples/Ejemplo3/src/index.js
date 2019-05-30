import { calcularFactor } from "./helpers";

const rich = { factor: 1.2 };
const poor = { factor: 0.6 };

const user1 = {
  name: "Mario",
  city: "Barcelona",
  age: "30",
  money: "100"
};
const user2 = {
  name: "Aleix",
  city: "Badalona",
  age: "30",
  money: "200"
};
const user3 = {
  name: "Alberto",
  city: "Barcelona",
  age: "27",
  money: "50"
};
const user4 = {
  name: "David",
  city: "Barcelona",
  age: "26",
  money: "100"
};
const user5 = {
  name: "Dani",
  city: "Molins de Rei",
  age: "26",
  money: "25"
};
const user6 = {
  name: "Natalia",
  city: "Hospitalet",
  age: "27",
  money: "200"
};
const user7 = {
  name: "Nil",
  city: "Barcelona",
  age: "29",
  money: "100"
};
const user8 = {
  name: "Jesus",
  city: "Mallorca",
  age: "34",
  money: "10"
};
const user9 = {
  name: "Laura",
  city: "Barcelona",
  age: "26",
  money: "5"
};
const user10 = {
  name: "Adriana",
  city: "Sant Cugat",
  age: "28",
  money: "500"
};

const usersList = [
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

const yearsList = [
  2000,
  2001,
  2002,
  2003,
  2004,
  2005,
  2006,
  2007,
  2008,
  2009,
  2010
];

calcularFactor(rich, poor, usersList, yearsList);
