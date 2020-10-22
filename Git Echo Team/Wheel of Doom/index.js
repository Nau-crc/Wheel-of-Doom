"use strict";

const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");
const addButton = document.querySelector("#addButton");

startButton.addEventListener("click", startWheel);
resetButton.addEventListener("click", reset);
addButton.addEventListener("click", addCoder);

let listaCoders = [
  
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
  const coderName = document.createElement("p", `${coder.name}`);
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

function addCoder() {
  const coderName = document.querySelector("#addCoder").value;
  if(!validateInput(coderName)) {
    return
  };
  const coder = {
    name:coderName,
    status:"alive"
  }
  listaCoders.push(coder);
  createCoderArticle(coder);
}


function validateInput (value) {
  if(value === "" || value === undefined) {
    showFeedbackMessage()
    return
  }
  return true
}

function showFeedbackMessage() {
  const input = document.querySelector(".add-coders");
  const message = document.createElement("p");
  message.innerHTML = "Please insert name";
  message.setAttribute("id", "feedback-message")
  input.appendChild(message)
}
 
const audio = document.getElementById("myAudio"); 
              
  function playAudio() { 
    audio.play(); 
  } 
  
  function pauseAudio() { 
    audio.pause(); 
  } 

window.onload = showCoders();
