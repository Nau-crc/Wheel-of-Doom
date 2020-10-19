"use strict";

let listaCoders = ["Laura", "Vanessa", "Quim", "Isma", "Ale", "Moi", "René"];


const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", addCoder);

function addCoder() {
  const newCoder = document.querySelector("#addName").value;
  listaCoders.push(newCoder);
  console.log(newCoder);
  agregarParticipante(newCoder);
}

function agregarParticipante(coder) {
  const article = document.querySelector("#coderList");
article.innerHTML +=
  `
          <article id="` +
  coder +
  ` " class="participante">
              <span>` +
  coder +
  ` </span>
  <button class="deleteCoder"> - </button>
          </article>
      `
  ;
  /* const buttonDelete = document.querySelector(".deleteCoder");
  buttonDelete.addEventListener("click", */
  console.log(coder)
  console.log(buttonDelete)
}

function deleteCoder(coder) {
  const index = listaCoders.indexOf(coder);
  listaCoders.splice(listaCoders.indexOf(coder), 1);
  console.log(listaCoders)
}

deleteCoder("Quim")

function selectCoder() {
    let coderSelected = Math.floor(Math.random() * listaCoders.length)
    
    console.log(coderSelected)
}

selectCoder() 