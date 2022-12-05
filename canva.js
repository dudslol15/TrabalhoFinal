let tela = document.querySelector("canvas")
let pin = tela.getContext("2d")

// Váriavel que define a posição do objeto.
var x = 681;
var y = 55;


// função que cria o objeto.
function desenhaCirculo(x, y, raio) {
raio = 16
    pin.fillStyle = 'black';
    pin.beginPath();
    pin.arc(x, y, raio, 100, 90 * Math.PI);
    pin.fill();
}
function desenhaCirculo2(x, y, raio) {
    raio = 13
        pin.fillStyle = 'white';
        pin.beginPath();
        pin.arc(x, y, raio, 100, 90 * Math.PI);
        pin.fill();
    }
    function desenhaCirculo3(x, y, raio) {
        raio = 5
            pin.fillStyle = 'red';
            pin.beginPath();
            pin.arc(x, y, raio, 100, 90 * Math.PI);
            pin.fill();
        }
    


function  limpaTela ( )  {

    pin.fillStyle = "black"
    pin.beginPath()
    pin.strokeRect(650,40, 60, 60)
    pin.closePath()
    pin.fill()
    pin.stroke()
    
}

function AtualizarTela(){
    limpaTela()
    desenhaCirculo(x , y , 10)
    desenhaCirculo2(x,y,10)
    desenhaCirculo3(x,y,10)
}

setInterval(AtualizarTela,1000)