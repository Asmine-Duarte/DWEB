var i,a,r
a = prompt("Digite seu ano de nascimento")
i = 2022 - a
if(i>=18){
    r = prompt("Você foi aprovado no exame de direção?")
    if(r=='sim' || r=='SIM'){
        alert("Você foi aprovado")
    }
    else{
        alert("Você precisa passar no exame de direção")
    }
    
}


else{
    alert("Você não tem idade suficiente")
}