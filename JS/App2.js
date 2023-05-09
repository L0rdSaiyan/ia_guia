let msgUser = document.getElementById("msgUser");

function sendMsg() {
  alert(msgUser.value);
}

document.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {

    const msgEnviada = document.getElementById("msg-usuario")
    msgEnviada.innerText = msgEnviar.value
  

  }
});

let msgEnviar = document.getElementById("msg-area");
let btnEnviar = document.getElementById("btn");

btnEnviar.addEventListener('click', function() {
  const msgEnviada = document.getElementById("msg-usuario")
  msgEnviada.innerText = msgEnviar.value


});

