const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    removerSelecaoDoPersonagem();

    personagem.classList.add("selecionado");

    initCardSelecionado(personagem);

    // alterarImagemPersonagemSelecionado(personagem);
    // alterarNomePersonagemSelecionado(personagem);
    // alterarDescricaoPersonagemSelecionado(personagem);
  });
});

// function alterarDescricaoPersonagemSelecionado(personagem) {
//   const descricaoPersonagem = document.getElementById("descricao-personagem");
//   descricaoPersonagem.innerText = personagem.getAttribute("data-description");
// }

// function alterarNomePersonagemSelecionado(personagem) {
//   const nomePersonagem = document.getElementById("nome-personagem");
//   nomePersonagem.innerText = personagem.getAttribute("data-name");
// }

// function alterarImagemPersonagemSelecionado(personagem) {
//   const imagemPersonagemGrande = document.querySelector(".personagem-grande");
//   const idPersonagem = personagem.attributes.id.value;
//   imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;
// }

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector(".selecionado");
  if (personagemSelecionado) {
    personagemSelecionado.classList.remove("selecionado");
  }
}

function initCardSelecionado(personagem) {
  const idPersonagem = personagem.attributes.id.value;
  const descricaoPersonagem = personagem.getAttribute("data-description");
  const nomePersonagem = personagem.getAttribute("data-name");
  const imagemPersonagemGrande = `./src/img/card-${idPersonagem}.png`;

  const view = `<img
                  class="personagem-grande"
                  src="${imagemPersonagemGrande}"
                  alt="personagem selecionado" />
                <div class="informacoes-personagem">
                  <h2 class="nome-personagem" id="nome-personagem">${nomePersonagem}</h2>
                  <p class="descricao-personagem" id="descricao-personagem">${descricaoPersonagem}</p>
                </div>`;

  document.getElementById('personagem-selecionado').innerHTML = view;
}
