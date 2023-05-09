let msgUser = document.getElementById("msgUser");

let msgEnviar = document.getElementById("msg-area");
let btnEnviar = document.getElementById("btn");

document.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {

    const msgEnviada = document.getElementById("msg-usuario")
    msgEnviada.innerText = msgEnviar.value
  

  }
});


btnEnviar.addEventListener('click', function() {
  const msgEnviada = document.getElementById("msg-usuario")
  let chat2 = document.querySelector(".chat-2Inv")
  let chat3 = document.querySelector(".chat-3Inv")
  msgEnviada.innerText = msgEnviar.value
  chat2.className = "chat-2"

  setTimeout(()=>{


    chat3.className = "chat-3"

  },3000)




});


