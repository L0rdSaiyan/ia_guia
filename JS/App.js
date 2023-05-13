function confirmEntrar() {
  let sala = document.getElementById("sala");
  let text = sala.options[sala.selectedIndex].text;
  let usuario = document.getElementById("usuario").value;
  window.localStorage.setItem("usuario", usuario);
  if (usuario === "") {
    alertify.alert("ERRO!", "insira seu usuário antes de prosseguir");
  } else {
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
}
