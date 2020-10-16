// tipos de dados
// String ""
// Number 01
// Object {}
// Boolean true or false
// Array []

// pegar coordenadas no google maps
// create map
const map = L.map('mapid').setView([-11.2556496,-39.3750719], 17); //[longitude e latitude] 

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon ({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create popup overlay
const popup = L.popup ({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

//create and add maker
L.marker([-11.2556496,-39.3750719], {icon})
.addTo(map)
.bindPopup(popup)