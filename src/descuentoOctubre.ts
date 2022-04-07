const btnDescuento:any = document.getElementById("btnDescuento")

let mesDeCompra = <HTMLInputElement>document.getElementById("mes")
let unidad = <HTMLInputElement>document.getElementById("unidad")
let suma = <HTMLInputElement>document.getElementById("suma")

let mes
let uni:number
let cant:number
let total:number
let descuento:number

btnDescuento.addEventListener("click", () => {
    mes = mesDeCompra.value
    uni = Number(unidad.value)
    cant = Number(suma.value)
    total = uni * cant
    descuento = total - (0.15 * total)
    
    if(mes === "Octubre"){
        console.log("Su compra es de $",total, "Como compro en Octubre se aplica un 15% de dscuento, quedando asi un total de $", descuento
        )
    } else {
        console.log("El total de su compra es de: ", total)
    }
})
