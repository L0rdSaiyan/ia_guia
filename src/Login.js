import './index.css'
import robot from './Media/robot-top-hat.gif'
import Main from './Main';
import confirm from './eventos/login'
import React from "react";



const Login = () => {




  return (
    <div id="container">


  <script src="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/bootstrap.min.css"/>


      <div className="robot">
        <img src={robot} alt="logo" id="robozin" />
        <div className="bubble bubble-bottom-left">
          Olá, eu sou a inteligência artificial feita pelo grupo da Sté do 1° guia. Informe seu nome para continuar
        </div>
      </div>

      <div className="inputs">
        <input type="text" id="usuario" placeholder="Usuário" />
        <select name="select" id="sala">
          <option value="1enfermagem">1° Enfermagem</option>
          <option value="1guia">1° Guia de Turismo</option>
          <option value="1informática">1° Informática</option>
          <option value="2enfermagem">2° Enfermagem</option>
          <option value="2guia">2° Guia de Turismo</option>
          <option value="2infor">2° Informática</option>
          <option value="3enfer">3° Enfermagem</option>
          <option value="3guia">3° Guia de Turismo</option>
          <option value="3infor">3° Informática</option>
        </select>
        <button id="entrar" onClick={confirm}>Entrar</button>
      </div>

      <footer>
        <p>Obrigado por estar presente aqui na nossa apresentação</p>
      </footer>
    </div>
  );
} 

      export default Login
  
