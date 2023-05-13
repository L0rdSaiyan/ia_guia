
const popup = ()=>{
Swal.fire({

  title: '<strong>O que Guia de Turismo e Robótica tem a ver com Sustentabilidade?</strong>',
  icon: 'info',
  html:
  '<p>A princípio, pode não parecer que há uma conexão direta entre guia de turismo, robótica e sustentabilidade. No entanto, há maneiras em que esses elementos podem ser combinados para promover práticas sustentáveis ​​e responsáveis ​​no setor do turismo.</p> '+
  '<p>Por exemplo, a robótica pode ser usada para melhorar a eficiência e reduzir o impacto ambiental das atividades turísticas. Robôs podem ser usados para coletar lixo nas praias, monitorar a qualidade do ar e da água, e até mesmo para ajudar na conservação de espécies ameaçadas de extinção.  </p> '+
  '<p>Além disso, guias de turismo podem desempenhar um papel importante na promoção de práticas sustentáveis. Guias podem educar os turistas sobre a importância da preservação ambiental e cultural, incentivando-os a adotar comportamentos mais conscientes durante suas viagens. Eles também podem ajudar a promover atividades turísticas que sejam menos prejudiciais ao meio ambiente e à comunidade local.  </p>'+
  '<p>Em resumo, a combinação de guias de turismo e robótica pode ser uma forma de promover práticas sustentáveis ​​e responsáveis ​​no setor do turismo, incentivando comportamentos conscientes e a adoção de tecnologias que reduzem o impacto ambiental.</p>',
  confirmButtonText: 'Fechar'
})

}


const confirmEntrar = ()=> {
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
