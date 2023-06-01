let btnEnviar = document.getElementById("btn");
const logo = document.getElementById("titulo-2");
const arraySaudacao = ["olá", "ola", "eae", "eaí", "hello", "fala tu", "aoba"];
const arrayBom = [
  "ótimo",
  "otimo",
  "ótima",
  "otima",
  "bom",
  "positiva",
  "positivo",
  "boa",
  "braba",
  "gostei",
  "massa",
  "curti",
];
const arrayRuim = [
  "ruim",
  "pessima",
  "péssima",
  "horrível",
  "horrivel",
  "não gostei",
  "nao gostei",
  "desastre",
  "caos",
  "muito ruim",
  "idiota",
  "desperdicio de tempo",
  "desperdício de tempo",
  "catastrofe",
  "merda",
  "bosta",
];

const arraySugestões = [
  "reduzir o desmatamento",
  "desmatamento",
  "desperdicio",
  "desperdício",
  "alimentação",
  "alimentaçao",
  "alimentacao",
  "seletivo",
  "coleta",
];

const msgEnviada = document.getElementById("msg-usuario");
let msgEnviar = document.getElementById("msg-area");
let chat2 = document.querySelector(".chat-2Inv");
let chat3 = document.querySelector(".chat-3Inv");
let chatBot = document.querySelector("#chatDoBot");
let user = window.localStorage.getItem("usuario").replace(/\s+/g, " ").trim();
let cabecalho = document.querySelector(".header-msg-user");
const chat1 = (document.querySelector("#chatUser").innerText = user);
const fala1 = document.querySelector("#fala-chat-1");
let charr = window.localStorage.getItem("personagem");

const botIcons = document.getElementsByClassName("iconBot");

for (let i = 0; i < botIcons.length; i++) {
  const botIcon = botIcons[i];

  botIcon.style.backgroundImage = `url(${charr})`;
}

if (charr === "/Media/yoda.jpg") {
  fala1.innerText = `Olá, ${user} Um Chatbot projetado pelo Grupo de Guia de Turismo para a feira de ciências sobre o tema robótica eu sou. Colher sugestões sustentáveis é meu objetivo. Hmm. Sim, sim. Fortes ideias sustentáveis podemos cultivar juntos.`;
} else if (charr === "/Media/darth_vader.jpg") {
  fala1.innerText = `Olá, ${user} Este Chatbot foi criado pelo grupo de guia de turismo para a feira de ciências sobre o tema "robótica". Meu objetivo é extrair sugestões sustentáveis. Venha para o lado sombrio da ecologia e compartilhe suas ideias para um futuro mais sustentável.`;
} else if (charr === "/Media/franky.png") {
  fala1.innerText = `SUUPPEEERRR! ${user} eu sou um chatbot hiper-hirado criado pelo grupo de guia de turismo para a feira de ciências sobre o tema "robótica". O pae ta aqui pra pegar as informações sustentáveis dos usuários. Manda bala!`;
}

logo.addEventListener("click", () => {
  window.location.href = "/Pages/index.html";
});

btnEnviar.addEventListener("click", function () {
  let msgBot = ""; // inicializa com valor padrão vazio

  if (msgEnviar.value === "") {
    Swal.fire({
      title: "ERRO!",
      text: "Não é possível enviar mensagens em branco!",
      icon: "error",
      confirmButtonText: "Ok",
    });
  } else {
    let novaMsg = msgEnviar.value;
    msgEnviar.value = "";
    cabecalho.innerHTML = user;

    msgEnviada.innerText = novaMsg;
    chat2.classList.add("chat-2");
    chat2.classList.remove("chat-2Inv");

    arraySaudacao.forEach((elemento, index) => {
      if (novaMsg.toLowerCase().includes(elemento)) {
        msgBot += arraySaudacao[index] + " "; // usa operador +=
      }
    });

    if (msgBot === "") {
      msgBot = "Olá!";
    }
    if (
      novaMsg.toLowerCase().includes("gostei") ||
      novaMsg.toLowerCase().includes("curtido")
    ) {
      msgBot += "Ficamos felizes por você ter gostado da apresentação!";
    } else {
      arrayBom.forEach((elemento, index) => {
        if (novaMsg.toLowerCase().includes(elemento)) {
          msgBot +=
            ", ficamos felizes por você ter achado a apresentação " +
            elemento +
            " ";
        }
      });
    }

    arrayRuim.forEach((elemento, index) => {
      if (novaMsg.toLowerCase().includes(elemento)) {
        msgBot +=
          ", desculpe por não ter apreciado tanto, iremos melhorar! :) ";
      }
    });

    if (msgBot === "" || msgBot === "Olá!") {
      msgBot += " Obrigado"; // define valor padrão se nenhuma condição foi satisfeita
    }

    msgBot += ". Sua sugestão foi registrada!";

    setTimeout(() => {
      chat3.classList.add("chat-3");
      chat3.classList.remove("chat-3Inv");
      chatBot.innerHTML = msgBot;
    }, 3000);

    setTimeout(() => {
      chat2.classList.add("chat-2Inv");
      chat2.classList.remove("chat-2");
      chat3.classList.add("chat-3Inv");
      chat3.classList.remove("chat-3");

      Swal.fire({
        title: "Obrigado!",
        text: "Sua sugestão foi registrada!",
        icon: "success",
        confirmButtonText: "Voltar para a página inicial",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/Pages/index.html";
        }
      });
    }, 10000);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    event.preventDefault();

    if (msgEnviar.value === "") {
      Swal.fire({
        title: "ERRO!",
        text: "Não é possível enviar mensagens em branco!",
        icon: "error",
      });
    } else {
      let novaMsg = msgEnviar.value;
      cabecalho.innerHTML = user;
      msgEnviada.innerText = novaMsg;

      chat2.classList.add("chat-2");
      chat2.classList.remove("chat-2Inv");
      msgEnviar.value = "";

      let msgBot = ""; // inicializa com valor padrão vazio

      msgEnviada.innerText = novaMsg;
      chat2.className = "chat-2";

      arraySaudacao.forEach((elemento, index) => {
        if (novaMsg.toLowerCase().includes(elemento)) {
          msgBot += arraySaudacao[index] + " "; // usa operador +=
        }
      });

      if (msgBot === "") {
        msgBot = "Olá!";
      }

      if (
        novaMsg.toLowerCase().includes("gostei") ||
        novaMsg.toLowerCase().includes("curti")
      ) {
        msgBot += "Ficamos felizes por você ter gostado da apresentação!";
      } else {
        arrayBom.forEach((elemento, index) => {
          if (novaMsg.toLowerCase().includes(elemento)) {
            msgBot +=
              ", ficamos felizes por você ter achado a apresentação " +
              elemento +
              " ";
          }
        });
      }
      arrayRuim.forEach((elemento, index) => {
        if (novaMsg.toLowerCase().includes(elemento)) {
          msgBot +=
            ", desculpe por não ter apreciado tanto, iremos melhorar! :) ";
        }
      });

      if (msgBot === "" || msgBot === "Olá!") {
        msgBot += " Obrigado"; // define valor padrão se nenhuma condição foi satisfeita
      }

      msgBot += ". Sua sugestão foi registrada!";

      setTimeout(() => {
        chat3.className = "chat-3";
        chatBot.innerHTML = msgBot;
      }, 3000);

      setTimeout(() => {
        chat2.classList.add("chat-2Inv");
        chat2.classList.remove("chat-2");
        chat3.classList.add("chat-3Inv");
        chat3.classList.remove("chat-3");

        Swal.fire({
          title: "Obrigado!",
          text: "Sua sugestão foi registrada!",
          icon: "success",
          confirmButtonText: "Voltar para a página inicial",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "./index.html";
          }
        });
      }, 7000);
    }
  }
});
