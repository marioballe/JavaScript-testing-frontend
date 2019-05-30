import "./styles.css";

//Constantes
const AGEPLUS = 5;

//Variables
const name = "Mario";
const city = "Barcelona";
let age = "30";
let newAge = 0;

//Convert Age to number
age = Number(age);
//Add X years to age
newAge = age + AGEPLUS;

function CompareAge(age, newAge) {
  if (newAge > age) {
    return alert("La nueva edad es más grande.");
  }
  return console.log("La nueva edad es inferior a la anterior.");
}
