// Esperar o site carregar
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("voluntario-form");
  const mensagem = document.getElementById("mensagem");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede o site de recarregar

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    // Aqui, você pode salvar os dados ou enviar para o backend no futuro

    // Mostra mensagem de agradecimento
    mensagem.textContent = `Obrigado, ${nome}! Em breve entraremos em contato no e-mail ${email}.`;

    // Limpa os campos
    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cadastroForm");
  const mensagem = document.getElementById("mensagem");

  // Máscara para CPF, telefone e CEP
  function aplicarMascara(input, mascara) {
    input.addEventListener("input", () => {
      let valor = input.value.replace(/\D/g, "");
      let resultado = "";
      let mascaraIndex = 0;

      for (let i = 0; i < valor.length && mascaraIndex < mascara.length; i++) {
        if (mascara[mascaraIndex] === "#") {
          resultado += valor[i];
        } else {
          resultado += mascara[mascaraIndex];
          i--;
        }
        mascaraIndex++;
      }

      input.value = resultado;
    });
  }

  aplicarMascara(document.getElementById("cpf"), "###.###.###-##");
  aplicarMascara(document.getElementById("telefone"), "(##) #####-####");
  aplicarMascara(document.getElementById("cep"), "#####-###");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    mensagem.textContent = "Cadastro enviado com sucesso!";
    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nome.length < 3) {
      alert("O nome deve ter pelo menos 3 letras.");
      event.preventDefault(); // Impede envio
    }

    if (!email.includes("@")) {
      alert("Por favor, insira um e-mail válido.");
      event.preventDefault();
    }
  });
});
