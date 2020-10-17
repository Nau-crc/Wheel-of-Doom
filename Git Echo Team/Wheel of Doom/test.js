"use strict";

const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");

startButton.addEventListener("click", startWheel);
resetButton.addEventListener("click", reset);

let listaCoders = [
  { name: "Vanessa", status: "alive" },
  { name: "Quim", status: "alive" },
  { name: "Carmen", status: "alive" },
  { name: "Laura", status: "alive" },
  { name: "Isma", status: "alive" },
];

function startWheel() {
  const listCodersAlive = [];
  listaCoders.forEach((coder) => {
    if (coder.status === "alive") {
      listCodersAlive.push(coder);
    }
  });
  if (listCodersAlive.length <= 0) {
    showResultMessage("No one left! Please reset");
    return;
  }
  const selectedCoder = selectCoder(listCodersAlive);
  showResultMessage(selectedCoder.name);
  updateList(selectedCoder, "dead");
  updateCoderCard(selectedCoder);
}

function selectCoder(array) {
  const selectedCoder = array[Math.floor(Math.random() * array.length)];
  return selectedCoder;
}

function updateCoderCard(coder) {
  const coderCard = document.querySelector(`#${coder.name}`);
  coderCard.className = `${coder.status}`;
}

function updateList(coder, status) {
  const coderIndex = listaCoders.findIndex(
    (element) => element.name === coder.name
  );
  listaCoders[coderIndex].status = status;
}

function showResultMessage(message) {
  const selectedCard = document.querySelector("#display-message");
  selectedCard.innerHTML = message;
}

function showCoders() {
  listaCoders.forEach((coder) => {
    createCoderArticle(coder);
  });
}

function createCoderArticle(coder) {
  const coderListSection = document.querySelector("#coderList");
  const coderArticle = document.createElement("article");
  const coderName = document.createElement("span", `${coder.name}`);
  coderName.innerHTML += `${coder.name}`;
  coderArticle.setAttribute("class", `${coder.status}`);
  coderArticle.setAttribute("id", `${coder.name}`);
  coderArticle.appendChild(coderName);
  coderListSection.appendChild(coderArticle);
}

function reset() {
  listaCoders.forEach((element) => {
    updateList(element, "alive");
    updateCoderCard(element);
  });
  showResultMessage("");
}
window.onload = showCoders();
