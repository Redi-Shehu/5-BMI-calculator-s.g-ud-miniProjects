const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calcBtn = document.querySelector("#btn");
const bmiResultDOM = document.querySelector("#bmi-result");
const weightConditionDOM = document.querySelector("#weight-condition");

calcBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const heightInputCm = height.value;
  const heightInputMeter = heightInputCm / 100;
  const weightInput = weight.value;
  //   console.log(heightInputCm);
  //   console.log(heightInputMeter);
  //   console.log(weightInput);

  const bmiResult = weightInput / heightInputMeter ** 2;
  console.log(bmiResult);

  bmiResultDOM.value = bmiResult;

  if (bmiResult < 18.5) {
    weightConditionDOM.textContent = "Underweight";
  } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
    weightConditionDOM.textContent = "Normal weight";
  } else if (bmiResult >= 25 && bmiResult <= 29.9) {
    weightConditionDOM.textContent = "Overweight";
  } else if (bmiResult >= 30 && bmiResult <= 39.9) {
    weightConditionDOM.textContent = "Obese";
  }
});
