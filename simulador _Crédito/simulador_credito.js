var entradaDatos = document.querySelectorAll('.form-control')


function calcularCuotaMensual(montoPrestamo, plazo) {
const tasaInteres = 1.15/100
        const tasaElevadaMeses = Math.pow(1+tasaInteres, plazo)
        let cuotaMensual = (montoPrestamo*tasaInteres*tasaElevadaMeses) /(tasaElevadaMeses-1)
        cuotaMensual = cuotaMensual.toFixed(2)
        return cuotaMensual
}
function mostrarDatos() {  
 var montoPrestamo = entradaDatos[0].value
 var plazo = entradaDatos[1].value    
 let cuotaMensual = calcularCuotaMensual(montoPrestamo, plazo)
 cuotaMensual = new Intl.NumberFormat('es-CO').format(cuotaMensual)
 var resultadoCuota = document.querySelector('.resultadoCuota')
 resultadoCuota.innerHTML = `${cuotaMensual}`
 var username = document.querySelector('#username').value
 document.querySelector('#resultadoNombre').innerHTML = `Crédito a nombre de: ${username}`
}
mostrarDatos()
