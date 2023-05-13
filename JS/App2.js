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
  "bosta"
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
    "coleta"

  ]

const msgEnviada = document.getElementById("msg-usuario");
let msgEnviar = document.getElementById("msg-area");
let chat2 = document.querySelector(".chat-2Inv");
let chat3 = document.querySelector(".chat-3Inv");
let chatBot = document.querySelector("#chatDoBot");
let user = window.localStorage.getItem("usuario");
let cabecalho = document.querySelector(".header-msg-user");

logo.addEventListener("click", () => {
  window.location.href = "/index.html";
});

btnEnviar.addEventListener("click", function () {
  let msgBot = ""; // inicializa com valor padrão vazio

  if(msgEnviar.value === ''){

    Swal.fire({

      title: 'ERRO!',
      text: 'Não é possível enviar mensagens em branco!',
      icon: 'error',
      confirmButtonText: 'Ok'


    })

  }else{

  let novaMsg = msgEnviar.value;
  msgEnviar.value = ''
  cabecalho.innerHTML = user;
 

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
  if(novaMsg.toLowerCase().includes("gostei") || novaMsg.toLowerCase().includes("curtido")){

    msgBot += "Ficamos felizes por você ter gostado da apresentação!"

  }else{

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
      msgBot += ", desculpe por não ter apreciado tanto, iremos melhorar! :) ";
    }
  });

  if (msgBot === "" || msgBot === "Olá!") {
    msgBot += " Obrigado"; // define valor padrão se nenhuma condição foi satisfeita
  }

  msgBot += ". Sua sugestão foi registrada!"

  setTimeout(() => {
    chat3.className = "chat-3";
    chatBot.innerHTML = msgBot;
  }, 3000);


  setTimeout(()=>{


    Swal.fire({
      title: 'Obrigado!',
      text: 'Sua sugestão foi registrada!',
      icon: 'success',
      confirmButtonText: 'Voltar para a página inicial'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/index.html";
  
      }
  
    })

  },10000)
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    event.preventDefault()

    if(msgEnviar.value === ''){

      Swal.fire({
  
        title: 'ERRO!',
        text: 'Não é possível enviar mensagens em branco!',
        icon: 'error'  
  
      })
  
    }else{


    let novaMsg = msgEnviar.value;
    cabecalho.innerHTML = user;
    msgEnviada.innerText = novaMsg;
    chat2.className = "chat-2";
    msgEnviar.value = ''

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

    if(novaMsg.toLowerCase().includes("gostei") || novaMsg.toLowerCase().includes("curti")){

      msgBot += "Ficamos felizes por você ter gostado da apresentação!"
    }else{  
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

    msgBot += ". Sua sugestão foi registrada!"


    setTimeout(() => {
      chat3.className = "chat-3";
      chatBot.innerHTML = msgBot;
    }, 3000);
  

  setTimeout(()=>{


    Swal.fire({
      title: 'Obrigado!',
      text: 'Sua sugestão foi registrada!',
      icon: 'success',
      confirmButtonText: 'Voltar para a página inicial'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/index.html";
  
      }
  
    })

  },10000)
    }
  }
});