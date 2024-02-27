const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i=0; i <  botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
 }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");

    }
}

const contadores = document.querySelectorAll(".contador");
const tempObjetivo1 = new Date("2024-12-01T00:00:00");
const tempObjetivo2 = new Date("2024-10-31T00:00:00");
const tempObjetivo3 = new Date("2024-12-31T00:00:00");
const tempObjetivo4 = new Date("2025-01-30T00:00:00")

const tempos = [tempObjetivo1, tempObjetivo2, tempObjetivo3, tempObjetivo4];

function calculaTempo(tempodoObjetivo){
    let tempAtual = new Date();
    let tempFinal = tempodoObjetivo - tempAtual;
    let segundos = Math.floor(tempFinal / 1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    
    
    segundos %=60;
    minutos %=60;
    horas %=24
    dias %=365
    
    if (tempFinal > 0){
        return [dias, horas, minutos, segundos]

    }
    else {
        return[0,0,0,0,];

    }
}
function atualizaCronometro(){
    
    for (let i=0; i<contadores.length; i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0]; 
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];

        
    }

} 

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000)
}

comecaCronometro();
