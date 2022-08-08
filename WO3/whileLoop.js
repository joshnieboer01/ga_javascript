// counting to ten
let counter = 0;
while (counter <= 10) {
  counter++;
  console.log("inside the loop", counter);
}
console.log(counter);
// doubling average salaries - my attempt
let averageSalaries = [10, 20, 30, 40, 50, 60, 80];
while (averageSalaries = averageSalaries.length < 7){
let doubledSalaries = averageSalaries.while((averageSalary) => {
  return averageSalary * 2;
});
  console.log(doubledSalaries);

// doubling average salaries - correct answer

  const averageSalaries = [10, 20, 30, 40, 50, 60, 80];
  const doubleSalaries = []
  let i = 0;
  while (i < averageSalaries.length) {
    console.log(averageSalaries[i]*2);
    i += 1;
  }