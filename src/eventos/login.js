import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import React from 'react';

function confirm() {
    let usuario = document.getElementById("usuario").value;
  
    let sala = document.getElementById("sala");
    let value = sala.options[sala.selectedIndex].value;
    let text = sala.options[sala.selectedIndex].text;
  
    alertify.alert(
      "I.A do Guia",
      `Cadastro realizado com sucesso! Bem vindo(a) ${usuario} do ${text}`,
      function () {
        alertify.success("Aproveite!");
      }
    );
  
   
  
}
  export default confirm