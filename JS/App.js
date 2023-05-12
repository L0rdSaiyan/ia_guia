
function confirmEntrar() {
  let sala = document.getElementById("sala");
  let text = sala.options[sala.selectedIndex].text;
  const Usuario = document.getElementById("usuario");

  alertify.alert(
    "I.A do Guia",
    `Cadastro realizado com sucesso! Bem vindo(a) ${usuario.value} do ${text}`,
    function () {
      alertify.success("Aproveite!");
    }
  );
  
  setTimeout(() => {
    window.location.replace("/Pages/Page2.html");
  }, 2000);
}

