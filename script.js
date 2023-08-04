"use strict";
/*variable declarations*/
let bill = document.getElementById("bill");
let people = document.getElementById("peopleNo");
let tip = document.querySelectorAll(".tip");
let custom = document.getElementById("custom");
let tipForOne = document.getElementById("tipForOne");
let total = document.getElementById("total");
let reset = document.getElementById("reset");
const errorMsg = document.createElement("p");
const errorMsg2 = document.createElement("p");
let tipPercent;
let tipAmount;
let tipEach;
let billEach;
let sum;

tip.forEach((item) => {
  item.addEventListener("click", (event) => {
    tip.forEach((items) => {
      items.classList.remove("selected");
    });
    custom.addEventListener("input", () => {
      tipPercent = event.target.value / 100;
    });
    tipPercent = event.target.value / 100;
    event.target.classList.add("selected");
  });
});

/*form validation functions*/
function valid(alertText) {
  errorMsg.setAttribute("id", "error");
  const message = document.createTextNode(alertText);
  errorMsg.appendChild(message);
  document.getElementById("people").insertBefore(errorMsg, people);
  people.classList.add("error");
}

function valid2(alertText) {
  errorMsg2.setAttribute("id", "error2");
  const message = document.createTextNode(alertText);
  errorMsg2.appendChild(message);
  document.getElementById("numinp").insertBefore(errorMsg2, bill);
  bill.classList.add("error");
}

reset.addEventListener("click", () => {
  /* form validation*/
  errorMsg.innerHTML = "";
  errorMsg2.innerHTML = "";
  if (people.value == "") {
    valid(`Required`);
  } else if (people.value == 0) {
    valid(`Can't be zero`);
  } else {
    people.classList.remove("error");
  }

  if (bill.value == "") {
    valid2(`Required`);
  } else if (bill.value == 0) {
    valid2(`Can't be zero`);
  } else {
    bill.classList.remove("error");
  }

  /*expressions*/
  tipAmount = bill.value * tipPercent;
  tipEach = tipAmount / people.value;
  billEach = bill.value / people.value;
  sum = billEach + tipEach;

  /*result*/
  if (bill.value == "" || people.value == "") {
  } else if (bill.value == 0 || people.value == 0) {
  } else {
    tipForOne.innerHTML = "$" + tipEach.toFixed(2);
    total.innerHTML = "$" + sum.toFixed(2);
    reset.style.opacity = 1;
  }
});
