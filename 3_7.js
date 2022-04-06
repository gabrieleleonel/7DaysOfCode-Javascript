var area = prompt("Escolha uma Área a Seguir: Front-End ou Back-End",area);

if(area.toLowerCase() == "front-end" || area.toLowerCase() == "frontend"){
    var areaFront = prompt("Escolha uma linguagem para aprender: React ou Vue",areaFront);
    if(area.toLowerCase() == "react"){
        escolhaSeguirOuFullStack();
        
    }else if(area.toLowerCase() == "vue"){
        escolhaSeguirOuFullStack();
    }
}else if(area.toLowerCase() == "back-end" || area.toLowerCase() == "backend"){
    var areaFront = prompt("Escolha uma linguagem para aprender: C# ou Java",areaFront);
    if(area.toLowerCase() == "c#"){
        escolhaSeguirOuFullStack();
    }else if(area.toLowerCase() == "java"){
        escolhaSeguirOuFullStack();
    }
}

var continua = 0;
var tecnoList = [];

while(continua == 0){
    var tecno = prompt("Quais técnologias gostaria de se especializar?",tecno);
    tecnoList.push(tecno);
    var resposta = prompt("Tem mais alguma tecnologia que você gostaria de aprender?",resposta);
    if((resposta.toLowerCase() == "não" || resposta.toLowerCase() == "nao")?continua = 1:continua=0);
}

console.log(tecnoList);

function escolhaSeguirOuFullStack(){
    var resposta = prompt("Deseja continuar se especilizando na área (Digite 1) ou Deseja seguir para se tornar Fullstack(Digite 2)",resposta);
    if(resposta == 1 ? alert("Se especialise nesta área pois .... ") : alert("Fullstack é tudo doido"));
}
