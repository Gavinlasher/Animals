import { ProxyState } from "../AppState.js";
import { Alligator } from "../Models/Alligator.js";
import { Bat } from "../Models/Bat.js";
import { Cat } from "../Models/Cat.js";
import { Dog } from "../Models/Dog.js";
import { Eel } from "../Models/eel.js";
import { Frog } from "../Models/Frog.js";
import { Gator } from "../Models/Gator.js";
import { Horse } from "../Models/Horse.js";
import { Imp } from "../Models/Imp.js";
import { Jagar } from "../Models/Jagar.js";
import { Kelp } from "../Models/Kelp.js";
import { Lama } from "../Models/Lama.js";
import { Monkey } from "../Models/Monkley.js";
import { Newt } from "../Models/Newt.js";
import { Op } from "../Models/Op.js";
import { valuesService } from "../Services/ValuesService.js";
import { Pop } from "../Utils/Pop.js";

let jimmy = new Alligator("jimmy", 245, "green", false);
let steve = new Bat("joe", 22, "green", true);
let kim = new Cat("gbg", 234, "red", false, true);
let jonh = new Dog("ffddd", 22222, "red", false, true);
let jfk = new Eel("gavin", 23, "red", false, true);
let fgd = new Frog("kim", 234, "black", true, true);
let ally = new Gator("steven", 45, "red", false, true);
let bob = new Horse("jimmy", 454, "brown", false, false);
let grey = new Imp("jeryy", 32, "red", true, true);
let gray = new Jagar("name", 2222, "yellow", true, false);
let gage = new Kelp("name", 32, "green", false, true);
let bot = new Lama("name", 345, "yellow", false, false);
let gavinv2 = new Monkey("name", 122, "grey", true, false);
let dave = new Newt("name", 223344, "black", true, false);
let jess = new Op("name", 324, "red", false, true);

let current = [jimmy, steve, jfk, ally];
let overweight = [];

//Private
function _draw() {
  let values = ProxyState.values;
  let cardsTemplate = "";
  values.forEach((v) => (cardsTemplate += v.CardTemplate));
  document.getElementById("app").innerHTML = /*html*/ `
  <div class="my-3">
    <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.sayName()">say name</button>  
    <div class="values d-flex flex-wrap my-3">
      ${cardsTemplate}
    </div>
  </div>
  `;
}
function findWild() {
  for (let i = 0; i < current.length; i++) {
    const fat = current[i];
    if (fat.weight < 5) {
      overweight.push(fat);
      console.log("hello");
    }
  }
}

//Public

export class ValuesController {
  constructor() {
    ProxyState.on("values", _draw);
    _draw();
  }

  addValue() {
    valuesService.addValue();
  }

  async removeValue(id) {
    const yes = await Pop.confirm("Remove Value");
    if (yes) {
      valuesService.removeValue(id);
    }
  }

  findWild() {
    for (let i = 0; i < current.length; i++) {
      const fat = current[i];
      if (fat.weight < 5) {
        overweight.push(fat);
        console.log("hello");
      }
    }
  }

  SayHello() {
    valuesService.SayHello();
  }
}
