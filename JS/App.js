// PARTICLES


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

// FPS METER


const popup = ()=>{
Swal.fire({

  title: '<strong>O que Robótica tem a ver com Sustentabilidade?</strong>',
  icon: 'info',
  html:
  '<p>A princípio, pode não parecer que há uma conexão direta entre robótica e sustentabilidade. No entanto, há maneiras em que esses elementos podem ser combinados para promover práticas sustentáveis ​​e responsáveis ​​no setor da robótica.</p> '+
  '<p>Por exemplo, a robótica pode ser usada para melhorar a eficiência e reduzir o impacto ambiental das atividades turísticas. Robôs podem ser usados para coletar lixo nas praias, monitorar a qualidade do ar e da água, e até mesmo para ajudar na conservação de espécies ameaçadas de extinção.  </p> '+
  '<p>Além disso, pode desempenhar um papel importante na promoção de práticas sustentáveis. Podem educar sobre a importância da preservação ambiental e cultural, incentivando-os a adotar comportamentos mais conscientes durante suas viagens. Eles também podem ajudar a promover atividades que sejam menos prejudiciais ao meio ambiente e à comunidade local.  </p>'+
  '<p>Em resumo, a combinação de robótica e sustentabilidade pode ser uma forma de promover práticas sustentáveis ​​e responsáveis , incentivando comportamentos conscientes e a adoção de tecnologias que reduzem o impacto ambiental.</p>',
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
