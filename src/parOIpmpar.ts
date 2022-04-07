const comparar:any = document.getElementById("comparar")

let num = <HTMLInputElement>document.getElementById("eje2")

let numero:number

comparar.addEventListener("click", () => {
    numero = Number(num.value)
    console.log("Verificar si un numero es par o impar")
    if(numero % 2){
        console.log("El numero: ", numero, "es impar")
    } 
    else if(numero === 0){
        console.log("El numero es 0")
    }
    else {
        console.log("El numero: ", numero, "es par")
    }
})
