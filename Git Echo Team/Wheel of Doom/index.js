"use strict";

let listaCoders = [];


const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", addCoder);

function addCoder() {
  const newCoder = document.querySelector("#addName").value;
  listaCoders.push(newCoder);
  console.log(newCoder);
  agregarParticipante(newCoder);
  deleteButton();
}


function offCoder(coder) {
  listaCoders.splice(listaCoders.indexOf(coder), 1);

}
function deleteButton (coder){
  let deleteCoder = document.querySelector(".deleteCoder");
  deleteCoder.addEventListener("click", offCoder)
}

function agregarParticipante(coder) {
  const article = document.querySelector("#coderList");

const newCoder = 
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
  console.log(coder)
  deleteButton(coder)

  

  
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
