var entradaDatos = document.querySelectorAll('.form-control')
const clickCalcular =  document.querySelector('#calcular')
const clickBorrar = document.querySelector('#borrar')
let username = document.querySelector('#username')
let resultadoNombre = document.querySelector('#resultadoNombre')
let resultadoCuota = document.querySelector('.resultadoCuota')
let tasaInteres = document.querySelector('#interes')



function validar() {
        const  usuario = username.value
        const monto = entradaDatos[0].value
        const plazo = entradaDatos[1].value
        usuario.value;
        if (usuario == "") {
          alert("Ingresa tu Nombre");
          return false;
        
        }
        if (monto <= 0) {
                alert("Ingresa un monto");
                return false;
              }
        if (plazo <= 0) {
        alert("Ingresa un plazo");
        return false;
        }
        return true
      }




function calcularCuotaMensual(montoPrestamo, plazo) {
const tasaInteres = 1.15/100
        const tasaElevadaMeses = Math.pow(1+tasaInteres, plazo)
        let cuotaMensual = (montoPrestamo*tasaInteres*tasaElevadaMeses) /(tasaElevadaMeses-1)
        cuotaMensual = cuotaMensual.toFixed(2)
        return cuotaMensual
}



function mostrarDatos() {  
 let validarValores = validar()
 if (!validarValores ) {
         return
 }   
 var montoPrestamo = entradaDatos[0].value
 var plazo = entradaDatos[1].value    
 let cuotaMensual = calcularCuotaMensual(montoPrestamo, plazo)
 cuotaMensual = new Intl.NumberFormat('es-CO').format(cuotaMensual)
 resultadoCuota.innerHTML = `${cuotaMensual}`
 resultadoNombre.innerHTML = `Crédito a nombre de: ${username.value}`
 tasaInteres.innerHTML = `Tasa de interés: 1.15%`
}



function empty() {
entradaDatos[0].value = 0
entradaDatos[1].value = 0
username.value = ""
username.placeholder = "Ingresa un Nombre"
resultadoCuota.innerHTML = "cuota mensual"
resultadoNombre.innerHTML = "a nombre de"
tasaInteres.innerHTML = "intereses"
}



clickCalcular.onclick = mostrarDatos
clickBorrar.onclick = empty

