/*crie um script em que o usuário entre com um número e o sistema exiba qual o dia da semana. 
Exemplo 1 "Domingo" */

var dia

dia = prompt("Digite o dia da semana, mlq")

switch(dia)
{
    case "1":
        {
            alert("Domingo")
            break;
        }
        case "2":
        {
            alert("Segunda")
            break;
        }
        case "3":
        {
            alert("Terça")
            break;
        }
        case "4":
        {
            alert("Quarta")
            break;
        }
        case "5":
        {
            alert("Quinta")
            break;
        }
        case "6":
        {
            alert("Sexta")
            break;
        }
        case "7":
        {
            alert("Sábado")
            break;
        }
    default:
    {
        alert("Opção inválida")
        break;
    }
}