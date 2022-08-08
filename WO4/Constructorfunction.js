/*
 * CONSTRUCTOR FUNCTION
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Harry", 33);
let person2 = new Person("John", 23);

console.log(person1);
console.log(person2);
