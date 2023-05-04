function confirm(){
    let usuario = document.getElementById("usuario").value

    alertify.alert('I.A do Guia', `Cadastro realizado com sucesso! Bem vindo(a) ${usuario}`, function(){alertify.success('Aproveite!')});


}