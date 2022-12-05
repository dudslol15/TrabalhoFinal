let pg1 = document.querySelector("#pg1")
let pg2 = document.querySelector("#pg2")
let pg3 = document.querySelector("#pg3")
let pg4 = document.querySelector("#pg4")
let pg5 = document.querySelector("#pg5")
let pg6 = document.querySelector("#pg6")
let pg7 = document.querySelector("#pg7")
let pg8 = document.querySelector("#pg8")
let pg9 = document.querySelector("#pg9")
let pg10 = document.querySelector("#pg10")
let pgExtra = document.querySelector("#pgExtra")
let responder = document.querySelector("#responder")
let saida1 = document.querySelector("#saida1")
let saida2 = document.querySelector("#saida2")
let gg = new Audio("./gg.mp3")

responder.addEventListener("click", (e) => {

    let p1 = pg1.value
    let p2 = pg2.value
    let p3 = pg3.value
    let p4 = pg4.value
    let p5 = pg5.value
    let p6 = pg6.value
    let p7 = pg7.value
    let p8 = pg8.value
    let p9 = pg9.value
    let p10 = pg10.value
    let pEx = pgExtra.value

    if (p1 === "1942"){
        var r1 = 1
    } else {
        var r1 = 0
    }

    if (p2 === "80"){
        var r2 = 1
    } else {
        var r2 = 0
    }

    if (p3 === "1030"){
        var r3 = 1
    } else {
        var r3 = 0
    }

    if (p4 === "54"){
        var r4 = 1
    } else {
        var r4 = 0
    }

    if (p5 === "senaiCerto"){
        var r5 = 1
    } else {
        var r5 = 0
    }

    if (p6 === "senaiCerto"){
        var r6 = 1
    } else {
        var r6 = 0
    }

    if (p7 === "senaiCerto"){
        var r7 = 1
    } else {
        var r7 = 0
    }

    if (p8 === "tensao"){
        var r8 = 1
    } else {
        var r8 = 0
    }

    if (p9 === "resistor"){
        var r9 = 1
    } else {
        var r9 = 0
    }

    if (p10 === "cmais"){
        var r10 = 1
    } else {
        var r10 = 0
    }

    if (pEx === "portugol"){
        var rEx = 1
    } else {
        var rEx = 0
    }

    let total = r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8 + r9 + r10 + rEx
    let mil = total * 1000
    let dobro = mil * 2
    let meio = mil / 2

    function tocar (){
        gg.play
    }

    if (total === 11){

        tocar()

        saida1.innerHTML = `Parabéns!! Você acertou TODAS perguntas!
        Você é muito foda`
        saida2.innerHTML = `Seu prêmio foi de R$${dobro} de reais!!`
    }
    if (total > 7 && total < 11){
        saida1.innerHTML = `Parabéns!! Você acertou ${total} perguntas!!!!
        Você é demais`
        saida2.innerHTML = `Seu prêmio foi de R$${mil} de reais!!`
    }
    if (total < 8 && total > 3){
        saida1.innerHTML = `Você acertou ${total} perguntas!
        Você foi até que bem`
        saida2.innerHTML = `Seu prêmio foi de R$${meio} de reais!!`
    }
    if (total < 4){
        saida1.innerHTML = `Você acertou ${total} perguntas...
        Você foi bem mal`
        saida2.innerHTML = `Infelizmente você saiu sem prêmios.`
    }
})