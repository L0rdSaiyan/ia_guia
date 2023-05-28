const cvs = document.getElementById('particles');
const ctx = cvs.getContext('2d');


cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

let particlesArray;

let mouse = {
    x: null,
    y: null,
    radius: 170
}

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    mouse.radius = 170;
    console.log(mouse.radius);
});

document.onmousemove = (function(event) {
    var onmousestop = function() {
        mouse.radius = 0;
    }, thread;

    return function() {
        clearTimeout(thread);
        thread = setTimeout(onmousestop, 10);
    };
})();


class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#72C100';
        ctx.fill();
    }

    update() {
        if (this.x > cvs.width || this.x < 0) {
            this.directionX = -this.directionX;
        }

        if (this.y > cvs.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < cvs.width - this.size * 10) {
                this.x += 10;
            }

            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 10;
            }

            if (mouse.y < this.y && this.y < cvs.height - this.size * 10) {
                this.y += 10;
            }

            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 10;
            }
        }
        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
    }
}

function init() {
    particlesArray = [];
    let numberOfParticles = (cvs.height * cvs.width) / 9000;
    for (let i = 0; i < numberOfParticles * 0.25; i++) {
        let size = (Math.random() * 35) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = '#72C100';
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function connect() {
    let opacityValue = 1;
    for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i; j < particlesArray.length; j++) {
            let distance = ((particlesArray[i].x - particlesArray[j].x) * (particlesArray[i].x - particlesArray[j].x)) + ((particlesArray[i].y - particlesArray[j].y) * (particlesArray[i].y - particlesArray[j].y));

            if (distance < (cvs.width/ 7) * (cvs.height / 7)) {
                opacityValue = 1 - (distance / 20000);
                ctx.strokeStyle = 'rgba(159, 253, 50,' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

window.addEventListener('resize', function() {
    cvs.width = innerWidth;
    cvs.height = this.innerHeight;
    mouse.radius = 170;
    init();
});

window.addEventListener('mouseout', function() {
    mouse.x = undefined;
    mouse.y = undefined;
});

init();
animate();

// HEXAGON GRID
function hexagonGrid() {
  const HEXAGON_GRID = document.getElementById("hexagonGrid");
  const CONTAINER = HEXAGON_GRID.parentNode;

  let wall = {
    width: CONTAINER.offsetWidth,
    height: CONTAINER.offsetHeight
  };

  let rowsNumber = Math.ceil(wall.height / 80);
  let columnsNumber = Math.ceil(wall.width / 100) + 1;

  HEXAGON_GRID.innerHTML = "";

  for (let i = 0; i < rowsNumber; i++) {
    let row = document.createElement("div");
    row.className = "row";
    HEXAGON_GRID.appendChild(row);
  }

  let rows = HEXAGON_GRID.querySelectorAll(".row");

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < columnsNumber; j++) {
      let hexagon = document.createElement("div");
      hexagon.className = "hexagon";
      rows[i].appendChild(hexagon);
    }
  }
}

hexagonGrid();

window.addEventListener('resize', function() {
  hexagonGrid();
});




const popupBarraCeara = ()=>{
  const informacoes = `
  <p>A Barra do Ceará é um bairro localizado na região oeste de Fortaleza, capital do estado do Ceará, no Brasil. Conhecido por suas belas praias e paisagens naturais, a Barra do Ceará atrai tanto os moradores locais como os turistas que visitam a cidade. Vou apresentar alguns dos seus principais pontos turísticos com detalhes.</p>
  <h3>Pontos Turísticos da Barra do Ceará</h3>
  <ul>
    <li>Praia da Barra do Ceará: Bela praia com areias brancas e águas azuis.</li>
    <li>Ponte Metálica: Uma ponte histórica que atravessa o Rio Ceará.</li>
    <li>Farol da Barra do Ceará: Oferece uma vista deslumbrante da região.</li>
    <li>Estátua de Iracema: Homenagem à personagem do romance de José de Alencar.</li>
    <li>Mercado da Barra: Local para encontrar produtos típicos e experimentar a culinária local.</li>
    <li>Passeio de barco pelo Rio Ceará: Uma atividade relaxante para desfrutar da paisagem.</li>
  </ul>
  <p>Além desses pontos turísticos específicos, a Barra do Ceará também é conhecida por suas festas tradicionais, como o Carnaval e o São João, quando o bairro ganha vida com música, dança e comidas típicas.

  Lembre-se de verificar as condições climáticas e as recomendações de segurança antes de visitar qualquer local. Aproveite sua visita à Barra do Ceará!</p>
`;


Swal.fire({
  title: 'Informações sobre a Barra do Ceará',
  html: informacoes,
  icon: 'info',
  confirmButtonText: 'Fechar'
});



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
let arr = []
/*
function surprise(event){

  let x = event.keyCode
  let y = String.fromCharCode(x)
  arr.push(y)

  if(arr.join("") === "stefs"){

    
    Swal.fire({

      
      title: 'Stéfs',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff ',
      imageUrl: "data:image/jpeg;base64,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",
    imageWidth: 400,
   imageHeight: 200,
    imageAlt: 'Custom image',
      backdrop: `
        rgba(0,0,123,0.4)
        left top
        no-repeat
      `,
      text: " "



    })



  }


}

*/