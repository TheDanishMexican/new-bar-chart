"use strict";

window.addEventListener("load", start);

const myArray = [
  14, 2, 31, 25, 9, 17, 30, 7, 0, 12, 21, 28, 1, 10, 15, 23, 16, 27, 29, 5, 24,
  19, 6, 8, 20, 3, 32, 13, 26, 18, 4, 11, 22, 0, 31, 9, 17, 12, 21, 16,
];

function start() {
  console.log("js is running");
}

function displayData() {
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < 40; i++) {
    const firstBar = bars[i];

    const h = (myArray[i] / 32) * 100;

    firstBar.style.height = `${h}px`;
  }
}

displayData();
