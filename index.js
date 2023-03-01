

let res = document.getElementById('res')
let seleccion = document.getElementById('moneda')
let seleccionar = document.getElementById('tem')
let boton = document.getElementById('convertir')
boton.addEventListener('click', crear)
function crear(){  
    let conversor = document.getElementsByName('conver')
    if(conversor[0].checked){
        
        let cantidad = document.getElementById('monto')
        let dinero = Number(cantidad.value)
        var lenguajes = seleccion.options[seleccion.selectedIndex]
        var lengua = lenguajes.value
        if (lengua == 'soles'){
            res.innerHTML = `tipo de cambio:${dinero*0.73} soles`
        }    
        if (lengua == "dolar"){
            res.innerHTML = `tipo de cambio: ${dinero*0.19} dolar`
        } 
           
        
    }else{
        if (conversor[1].checked){
            let tempera = document.getElementById('temperatura')
            let tem = Number(tempera.value)
            let temperatura = seleccionar.options[seleccionar.selectedIndex]
            let tempe = temperatura.value
            if(tempe =='°F'){
                res.innerHTML = `${( tem * 9/5)+32}`
                
            }
            if(tempe == '°C'){
                res.innerHTML = `${(tem -32)* 5/9}`
            }
        }
    }
    formulario.reset()
}