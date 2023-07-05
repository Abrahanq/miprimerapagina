const botonAnterior = document.querySelector(".anterior")

const imagenes = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"]

let posicion = 0

const imagen = document.querySelector()
botonAnterior.addEventListener("click",()=> {
    posicion -= 1
    if(posicion == -1)
    posicion = imagenes.length - 1
imagen.src=imagenes[posicion]
})

botonSiguiente.addEventListener("click", (Event)=> {
    Event.preventDefault();
    posicion = 0
    if (position == 0)
    posicion = imagenes.length + 1
imagen.src = imagenes[posicion]
})