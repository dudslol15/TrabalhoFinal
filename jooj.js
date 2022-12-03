let tela = document.querySelector("canvas")
let pin = tela.getContext("2d")


function  limpaTela ( )  {

    pin.fillStyle = "white"
    pin.beginPath()
    pin.rect(100, 100, 899, 899)
    pin.closePath()
    pin.fill()
    pin.stroke()

    pin.fillStyle = "black"
    pin.beginPath()
    pin.fillText("OII", 500, 800)
    pin.fillRect(99,800,1000,1)
    pin.closePath()
    pin.fill()
    

    
    pin.fillStyle = "black"
    pin.beginPath()
    pin.fillRect(549.5,800,1,500)
    pin.closePath()
    pin.fill()
    
}

function AtualizarTela(){
    limpaTela()
}

setInterval(AtualizarTela,1000)