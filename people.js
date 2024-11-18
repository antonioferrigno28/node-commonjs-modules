// Importa la tua funzione da names.js
// Importa la tua funzione da hobbies.js

// Crea una funzione che non ha parametri.
// All  'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
// La   funzione dovrebbe restituisce un oggetto con tre proprietà: firstName, lastName, hobbies.

const createHobbiesObject = require("./js/hobbies.js");
const fullNameObject = require("./js/names.js");

function fullObject() {
  const name = fullNameObject("Cristian", "Dolo");
  const hobbies = createHobbiesObject("ao", "ab", "abc");

  return { ...name, ...hobbies };
}

console.log(fullObject());
