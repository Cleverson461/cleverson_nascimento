export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toglleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }
  function cliqueForaModal(event) {
    if (event.target === this) {
      toglleModal(event);
    }
  }
  if (botaoAbrir && botaoFechar && containerModal) {

   

    botaoAbrir.addEventListener("click", toglleModal);
    botaoFechar.addEventListener("click", toglleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
