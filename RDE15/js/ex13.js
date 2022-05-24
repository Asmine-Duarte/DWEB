//função sem retorno
function somar(n1,n2)
{
    var r 
    r = n1 + n2
    alert("Função de soma sem retorno. Resultado: " + r)
}

somar(10, 12)

//função com retorno
function subtrair(a,b)
{
    var r
    r = a - b
    return(r)
}

var resultado
resultado = subtrair(10, 12)
alert("Função subtrair com retorno. Resultado " + resultado)