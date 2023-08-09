import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchHoras() {
  async function fetchHoras(url) {
    try {
      const horasResponse = await fetch(url);
      const horasJSON = await horasResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");

      horasJSON.forEach((hora) => {
        const divHora = createHoras(hora);
        numerosGrid.appendChild(divHora);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  function createHoras(hora) {
    const div = document.createElement("div");
    div.classList.add("numero-list");
    div.innerHTML = `<h3>${hora.course}</h3><span data-numero>${hora.total}</span>`;

    return div;
  }

  fetchHoras("./horasapi.json");
}
