export class Bat {
  constructor(name, weight, color, fly) {
    this.name = "Bat";
    this.weight = 20;
    this.fly = true;
    this.color = "black";
  }
  SayWeight() {
    console.log("this animal weight is", this.weight);
  }
}
