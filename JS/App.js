let usuario = '';
const inputUsuario = document.getElementById("usuario");
inputUsuario.addEventListener("input", function() {
  usuario = inputUsuario.value;
});

function confirmEntrar() {
  let sala = document.getElementById("sala");
  let text = sala.options[sala.selectedIndex].text;
  alertify.alert(
    "I.A do Guia",
    `Cadastro realizado com sucesso! Bem vindo(a) ${usuario} do ${text}`,
    function () {
      alertify.success("Aproveite!");
    }
  );
  
  setTimeout(() => {
    window.location.replace("/Pages/Page2.html");
  }, 2000);
}

