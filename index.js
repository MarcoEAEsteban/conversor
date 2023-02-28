let boton = document.getElementById('convertir')
boton.addEventListener('click', crear)

function crear(){
    let conversor = document.getElementsByName('conver')
    let dolares = document.getElementById('dol')
    if(conversor[0].checked && dolares ){
        alert('ok')
    }
}