let btnEnviar = document.getElementById("btn");
const logo = document.getElementById("titulo-circle");
const arraySaudacao = ["olá", "ola", "eae", "eaí", "hello", "fala tu", "aoba"]
const arrayBom = ["ótimo", "otimo","ótima", "otima", "bom", "positiva", "positivo", "boa", "braba", "gostei", "massa", "curti"]
const arrayRuim = ["ruim", "pessima", "péssima", "horrível", "horrivel", "não gostei", "nao gostei", "desastre", "caos", "muito ruim"]
const msgEnviada = document.getElementById("msg-usuario");
let msgEnviar = document.getElementById("msg-area");
let chat2 = document.querySelector(".chat-2Inv");
let chat3 = document.querySelector(".chat-3Inv");
let chatBot = document.querySelector("#chatDoBot")

logo.addEventListener("click", () => {
  window.location.href = "/index.html";
});

btnEnviar.addEventListener("click", function () {
  let msgBot = ""; // inicializa com valor padrão vazio
  let novaMsg = msgEnviar.value;

  msgEnviada.innerText = novaMsg;
  chat2.className = "chat-2";

  arraySaudacao.forEach((elemento, index) => {
    if (novaMsg.toLowerCase().includes(elemento)) {
      msgBot += arraySaudacao[index] + " "; // usa operador +=
    }
  });

  if(msgBot === ""){

    msgBot = "Olá!"

  }

  arrayBom.forEach((elemento, index) => {
    if (novaMsg.toLowerCase().includes(elemento)) {
      msgBot += ", ficamos felizes por você ter achado a apresentação " + elemento + " ";
    }
  });

  arrayRuim.forEach((elemento, index) => {
    if (novaMsg.toLowerCase().includes(elemento)) {
      msgBot += ", desculpe por não ter apreciado tanto, iremos melhorar! :) ";
    }
  });
  
  if (msgBot === "" || msgBot === "Olá!") {
    msgBot += " Obrigado"; // define valor padrão se nenhuma condição foi satisfeita
  }

  setTimeout(() => {
    chat3.className = "chat-3";
    chatBot.innerHTML = msgBot;
  }, 3000);
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    let novaMsg = msgEnviar.value;

    msgEnviada.innerText = novaMsg;
    chat2.className = "chat-2";
        let msgBot = ""; // inicializa com valor padrão vazio

  msgEnviada.innerText = novaMsg;
  chat2.className = "chat-2";

  arraySaudacao.forEach((elemento, index) => {
    if (novaMsg.toLowerCase().includes(elemento)) {
      msgBot += arraySaudacao[index] + " "; // usa operador +=
    }
  });

  
  if(msgBot === ""){

    msgBot = "Olá!"

  }

  arrayBom.forEach((elemento, index) => {
    if (novaMsg.toLowerCase().includes(elemento)) {
      msgBot += ", ficamos felizes por você ter achado a apresentação " + elemento + " ";
    }
  });

  arrayRuim.forEach((elemento, index) => {
    if (novaMsg.toLowerCase().includes(elemento)) {
      msgBot += ", desculpe por não ter apreciado tanto, iremos melhorar! :) ";
    }
  });

  if (msgBot === "" || msgBot === "Olá!") {
    msgBot += " Obrigado"; // define valor padrão se nenhuma condição foi satisfeita
  }

  setTimeout(() => {
    chat3.className = "chat-3";
    chatBot.innerHTML = msgBot;
  }, 3000);



  }

  
});