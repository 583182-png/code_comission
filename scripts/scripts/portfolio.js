// Filtra as ilustrações sem baixar dados ou depender de bibliotecas.
"use strict";
const filtros = [...document.querySelectorAll("[data-filtro]")];
const obras = [...document.querySelectorAll("[data-categoria]")];

function filtrarObras(filtro) {
  document
    .querySelector(".grade-portfolio")
    .classList.toggle("filtrado", filtro.dataset.filtro !== "Todos");
  filtros.forEach((botao) => {
    const ativo = botao === filtro;
    botao.classList.toggle("filtro-ativo", ativo);
    botao.setAttribute("aria-selected", String(ativo));
    botao.tabIndex = ativo ? 0 : -1;
  });
  obras.forEach((obra) => {
    obra.hidden =
      filtro.dataset.filtro !== "Todos" &&
      obra.dataset.categoria !== filtro.dataset.filtro;
  });
}

filtros.forEach((botao, indice) => {
  botao.tabIndex = indice === 0 ? 0 : -1;
  botao.addEventListener("click", () => filtrarObras(botao));
  botao.addEventListener("keydown", (evento) => {
    let destino;
    if (evento.key === "ArrowRight") destino = (indice + 1) % filtros.length;
    if (evento.key === "ArrowLeft")
      destino = (indice - 1 + filtros.length) % filtros.length;
    if (evento.key === "Home") destino = 0;
    if (evento.key === "End") destino = filtros.length - 1;
    if (destino === undefined) return;
    evento.preventDefault();
    filtros[destino].focus();
    filtrarObras(filtros[destino]);
  });
});
