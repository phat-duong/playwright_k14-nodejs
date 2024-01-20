let weight = 80;
let height = 1.7;
let BMI = weight / (height * 2);

if (BMI < 18.5) {
  console.log("Underweight");
} else if (BMI <= 24.9) {
  console.log("Normal weight");
} else if (BMI <= 29.9) {
  console.log("Overweight");
} else {
  console.log("Obesity");
}
