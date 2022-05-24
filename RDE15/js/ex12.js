var v=[4,8,7,6]

//alert(v);

v[1] = 9

//alert(v)

lista=["Zequinha", 1880, "Estrada A", "Irati", "PR", 80.5]
alert(lista)

for(var i=0; i<lista.length; i++)
{
    document.write("<h2>" + lista[i] + "</h2>")
}

lista.push("84500-000") //adiciona item na ultima posicao
lista.push("vila sao joao")
alert(lista)

lista.pop() //remove o ultimo da lista
alert(lista)

lista.shift() //remove o primeiro da lista
lista.unshift("Mariazinha") //muda o nome do primeiro da lista
alert(list)

alert(lista.indexof("Irati")) // procura o indice de uma palavra e caso encontre retorna o indice 