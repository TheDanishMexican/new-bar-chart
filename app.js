"use strict";

window.addEventListener("load", start);

function start() {
  console.log("js is running");

  const bars = document.querySelectorAll(".bar");

  const firstBar = bars[0];

  const h = 4;

  firstBar.style.height = `${h}vw`;
}
