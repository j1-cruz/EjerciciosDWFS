const verificar:any = document.getElementById("verificar")

let sueldo = <HTMLInputElement>document.getElementById("sueldo")

let su:number

verificar.addEventListener("click", () => {
    su = Number(sueldo.value)
    console.log("Calculo de aumento de sueldo")
    if(su > 0 && su <= 15000){
        console.log("Su aumento es del 20% ahora le corresponde cobrar", su + su*0.2)
    } 
    else if(su >= 15001 && su <= 20000){
        console.log("Su aumento es del 10% ahora le corresponde cobrar", su + su*0.1)
    }
    else if(su >= 20001 && su < 25000){
        console.log("Su aumento es del 10% ahora le corresponde cobrar", su + su*0.05)
    }
    else if (su >= 25000 ){
        console.log("Su sueldo es igual o mayor a 25000 por lo tanto no le corresponde un aumento")
    }
})
