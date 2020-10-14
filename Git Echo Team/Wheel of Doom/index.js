"use strict";

// let agregarParticipanteLista = [];

let listaCoders = ["Isma", "Carmen", "Quim", "Vanessa", "Laura"];

const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", addCoder);

function addCoder() {
  const newCoder = document.querySelector("#addName").value;
  listaCoders.push(newCoder);
  console.log(listaCoders);
}

function agregarParticipante() {
  const article = document.querySelector("#coderList");

  listaCoders.forEach(
    (coder) =>
      (article.innerHTML +=
        `
                <article id="` +
        coder +
        ` " class="participante">
                    <span>` +
        coder +
        ` </span>
                </article>
            `)
  );
}

console.log(listaCoders);

// addCoder();

console.log(listaCoders);
// document
//   .querySelector("#addButton")
//   .addEventListener("click", agregarParticipante);

// function addCoders() {
//   let coder = document.querySelector("#addName").value;
//   if (coder != "") {
//     agregarParticipante(coder);
//   }

//   console.log(coder);
// }

// function agregarParticipante(coder) {
//   document.querySelector("#coderList").innerHTML +=
//     `
//         <article id="` +
//     coder +
//     ` " class="participante">
//             <span>` +
//     coder +
//     ` </span>
//         </article>
//     `;
//   agregarParticipanteLista(coder);
// }

// function agregarParticipanteLista(coder) {
//   listaCoders.push(coder);
// }
// addCoders();
