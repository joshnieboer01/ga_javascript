function Monkey(name, species, age, foods) {
  this.name = name;
  this.species = species;
  this.age = age;
  this.foods = foods;
}

const Monkey1 = new Monkey("Peter Parker", "Spider", 42, "banana");
const Monkey2 = new Monkey("David", "Tiger", 22, "nuts");

console.log(Monkey1);
console.log(Monkey2);
