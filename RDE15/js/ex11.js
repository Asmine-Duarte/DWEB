var n, t , cont

n =parseInt(prompt("Digite o número que você quer a tabuada, mlq"))
cont=0
while(cont<11)
{
    t = n * cont
    document.write("<h2>" + t + "</h2>")
    cont++
}

