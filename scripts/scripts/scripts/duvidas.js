// Abre uma resposta por vez e mantém o estado acessível.
"use strict";
const itensDuvidas = [...document.querySelectorAll(".item-duvida")];
itensDuvidas.forEach((item) => {
  const botao = item.querySelector("button");
  botao.addEventListener("click", () => {
    const abrir = botao.getAttribute("aria-expanded") !== "true";
    itensDuvidas.forEach((outro) => {
      const aberto = outro === item && abrir;
      outro.classList.toggle("duvida-aberta", aberto);
      outro
        .querySelector("button")
        .setAttribute("aria-expanded", String(aberto));
      outro
        .querySelector(".resposta-duvida")
        .setAttribute("aria-hidden", String(!aberto));
    });
  });
});
