let seleccion = document.getElementById('moneda')
let res = document.getElementById('res')
let nombre = document.getElementById('nombre')
let cantidad = document.getElementById('monto')
let tempera = document.getElementById('temperatura')

let opSol = document.createElement('option')
let opDolar = document.createElement('option')
opSol.innerHTML = 'soles'
opDolar.innerHTML = 'dolar'
seleccion.appendChild(opSol)
seleccion.appendChild(opDolar)

let seleccionar = document.getElementById('tem')
let opCel = document.createElement('option')
let opFar = document.createElement('option')
opCel.innerHTML = '°C'
opFar.innerHTML = '°F'
seleccionar.appendChild(opCel)
seleccionar.appendChild(opFar)

let boton = document.getElementById('convertir')
boton.addEventListener('click', crear)

function crear(){  
    let conversor = document.getElementsByName('conver')
    let usuario = nombre.value
    if(nombre.value == 0 || monto.value == 0 && temperatura.value == 0){
        alert('Rellene los espacios faltantes')
    }else{
        if(conversor[0].checked){
        
            
            let dinero = Number(cantidad.value)
            var lenguajes = seleccion.options[seleccion.selectedIndex]
            var lengua = lenguajes.value
            
            if (lengua == 'soles'){
                res.innerHTML = `${usuario}, el tipo de cambio es: s/${dinero*0.73}`
            }    
            if (lengua == "dolar"){
                res.innerHTML = `${usuario}, el tipo de cambio es: $${dinero*0.19}`
            } 
             
            
        }else{
            if (conversor[1].checked){
                
                let tem = Number(tempera.value)
                let temperatura = seleccionar.options[seleccionar.selectedIndex]
                let tempe = temperatura.value
                if(tempe =='°F'){
                    res.innerHTML = `${usuario} la temperatura es: °${( tem * 9/5)+32}`
                    
                }
                if(tempe == '°C'){
                    res.innerHTML = `${usuario} la temperatura es: °${(tem -32)* 5/9}`
                }
            }
        }
        formulario.reset()

    }
    
}