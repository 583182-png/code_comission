// Navegação por seções e menu para telas pequenas.
"use strict";
const navegacao = document.querySelector(".navegacao");
const botaoMenu = document.querySelector(".alternar-menu");

function fecharMenu() {
  navegacao.classList.remove("navegacao-aberta");
  botaoMenu.setAttribute("aria-expanded", "false");
  botaoMenu.setAttribute("aria-label", "Abrir menu");
}

botaoMenu.addEventListener("click", () => {
  const aberto = navegacao.classList.toggle("navegacao-aberta");
  botaoMenu.setAttribute("aria-expanded", String(aberto));
  botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

document.querySelectorAll("[data-destino]").forEach((botao) => {
  botao.addEventListener("click", () => {
    document.getElementById(botao.dataset.destino)?.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
    fecharMenu();
  });
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") fecharMenu();
});
document.addEventListener("click", (evento) => {
  if (!evento.target.closest(".interior-cabecalho")) fecharMenu();
});
