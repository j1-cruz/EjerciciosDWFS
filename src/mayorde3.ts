const enviar:any = document.getElementById("enviar")

let num1 = <HTMLInputElement>document.getElementById("num1")
let num2 = <HTMLInputElement>document.getElementById("num2")
let num3 = <HTMLInputElement>document.getElementById("num3")

let numero1: number;
let numero2: number;
let numero3: number;


enviar.addEventListener("click", () => {
    numero1 = Number(num1.value)
    numero2 = Number(num2.value)
    numero3 = Number(num3.value)

    console.log("Verificar cual es el mayor de los tres numeros")
    if(numero1 > numero2 && numero1 > numero3){
        console.log("El numero: ", numero1, "Es el mayor")

    } else if(numero2 > numero1 && numero2 > numero3) {
        console.log("El numero: ", numero2, "Es el mayor")
        
    } else if (numero3 > numero1 && numero3 > numero2){
        console.log("El numero: ", numero3, "Es el mayor")
    } else if (numero1 === numero2 && numero1 && numero2 > numero3){
        console.log("Primera y segunda fila son los mayores con el numero: ", numero1)
    } else if (numero1 === numero3 && numero1 && numero3 > numero2){
        console.log("Primera y tecer fila son los mayores con el numero: ", numero1)
    } else if (numero2 === numero3 && numero2 && numero3 > numero1){
        console.log("Segunda y tecer fila son los mayores con el numero: ", numero2)
    } else if (numero1 === numero2 && numero3){
        console.log("Los tres numeros son iguales: ", numero1)
    }
})