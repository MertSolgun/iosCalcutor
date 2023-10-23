const numbers = document.querySelector(".number-container");
const result = document.querySelector(".result");

const resultRemove = document.getElementById("clear");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let shouldClearResult = true;
let isEnteringSecondNumber = false;

numbers.addEventListener("click", (e) => {
  if (e.target.classList.contains("number")) {
    if (shouldClearResult) {
      result.textContent = "";
      shouldClearResult = false;
    }
    appendNumber(e.target.textContent);
    if (isEnteringSecondNumber) {
      secondNumber = parseFloat(result.textContent);
    }
  }
  if (e.target.textContent === "=") {
    clearResult();
    calcutor();
  }

  if (e.target.id === "operation") {
    if (
      e.target.textContent === "+" ||
      e.target.textContent === "-" ||
      e.target.textContent === "X" ||
      e.target.textContent === "/" ||
      e.target.textContent === "%" ||
      e.target.textContent === "." ||
      e.target.textContent === "+/-"
    ) {
      if (e.target.textContent === "+/-") {
        result.textContent = parseFloat(-result.textContent);
      }
      if (e.target.textContent === ".") {
        result.textContent = parseFloat(result.textContent) + ".";
      } else {
        operator = e.target.textContent;
        firstNumber = parseFloat(result.textContent);
        isEnteringSecondNumber = true;
        shouldClearResult = true;
      }
    }
  }
});

const appendNumber = (num) => {
  result.textContent += num;
};

const clearResult = () => {
  result.textContent = "";
};

const calcutor = () => {
  let resultValue;

  switch (operator) {
    case "+":
      resultValue = parseFloat(firstNumber + secondNumber);
      break;
    case "-":
      resultValue = parseFloat(firstNumber - secondNumber);
      break;
    case "X":
      resultValue = parseFloat(firstNumber * secondNumber);
      break;
    case "/":
      resultValue = parseFloat(firstNumber / secondNumber);
      break;
    case "%":
      resultValue = parseFloat(firstNumber % secondNumber);
      break;
    case ".":
      resultValue = parseFloat(`${firstNumber} ${operator} ${secondNumber}`);
      break;
    case "+/-":
      resultValue = parseFloat(`${firstNumber} ${operator} ${secondNumber}`);

      break;
    default:
      break;
  }
  result.textContent = resultValue;
  shouldClearResult = true;
  isEnteringSecondNumber = false;
};

resultRemove.addEventListener("click", () => {
  result.textContent = 0;
  shouldClearResult = true;
  isEnteringSecondNumber = false;
});

///Clock

const date = document.querySelector(".clock p");
const clock = document.querySelector(".clock span");

var today = new Date();
var options = {
  weekday: "long",
  month: "long",
  day: "numeric",
};

date.innerHTML = today.toLocaleDateString("tr-TR", options);

var hours = new Date().getHours();
var minute = new Date().getMinutes();

var formattedHours = hours.toString().padStart(2, "0");
var formattedMinutes = minute.toString().padStart(2, "0");

clock.innerHTML = `${formattedHours} ${formattedMinutes}`;

// screen

const screen = document.querySelector(".screen-image");
const sc = document.querySelector(".screen");
const clk = document.querySelector(".clock");
const screenTab = document.querySelector(".screen-tab");
const tab = document.querySelector(".tab");
const sor = document.querySelector(".sor");

screen.addEventListener("click", () => {
  sc.style.positon = "absolute";
  sc.style.top = "25px";
  screen.classList.add("screen-down");
  screen.style.height = "0px";
  clk.style.display = "none";
  screenTab.style.display = "none";
  tab.style.display = "none";
  sor.style.display = "none";
});
