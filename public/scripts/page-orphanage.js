const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


// create map
const map = L.map('mapid', options).setView([-11.2556496,-39.3750719], 17); //[longitude e latitude] 

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon ({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


//create and add maker
L.marker([-11.2556496,-39.3750719], {icon})
.addTo(map)

/* image gallery */

function selectImage(event){
    const button = event.currentTarget
   
    // remover todas as classes .active
    const  buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    
    // atualizar o container de imagem
    imageContainer.src = image.src

    // adicionar  a class .active para este botão
    button.classList.add('active')
}