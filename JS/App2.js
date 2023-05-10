let msgEnviar = document.getElementById("msg-area");
let btnEnviar = document.getElementById("btn");
const logo = document.getElementById("titulo-circle");

logo.addEventListener("click", () => {
  window.location.href = "/index.html";
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    const msgEnviada = document.getElementById("msg-usuario");
    msgEnviada.innerText = msgEnviar.value;
  }
});

btnEnviar.addEventListener("click", function () {
  const msgEnviada = document.getElementById("msg-usuario");
  let chat2 = document.querySelector(".chat-2Inv");
  let chat3 = document.querySelector(".chat-3Inv");
  let chatBot = document.querySelector("#chatDoBot")
  let novaMsg = msgEnviar.value;
  let msgBot;

  msgEnviada.innerText = novaMsg;
  chat2.className = "chat-2";

  if (novaMsg.toLowerCase().includes("ola") || novaMsg.toLowerCase().includes("olá") || novaMsg.toLowerCase().includes("oi") || novaMsg.toLowerCase().includes("eae") || novaMsg.toLowerCase().includes("eai") || novaMsg.toLowerCase().includes("eaí")) {
    if (novaMsg.toLowerCase().includes("ótimo") || novaMsg.toLowerCase().includes("otimo") || novaMsg.toLowerCase().includes("ótima") || novaMsg.toLowerCase().includes("otima")) {
      msgBot = "Olá! Nossa equipe fica muito feliz por sua avaliação positiva!"
    }else if(novaMsg.toLowerCase().includes("ruim") || novaMsg.toLowerCase().includes("péssima") || novaMsg.toLowerCase().includes("pessima") || novaMsg.toLowerCase().includes("horrível") || novaMsg.toLowerCase().includes("horrivel") || novaMsg.toLowerCase().includes("não gostei") || novaMsg.toLowerCase().includes("nao gostei")){

      msgBot = "Olá! Puxa, lamentamos por não ter sido uma experiência tão boa"

    }
  }

  setTimeout(() => {
    chat3.className = "chat-3";
    chatBot.innerHTML = msgBot;
  }, 3000);
});
