const formulario = document.querySelector('#formulario');


loadAddEventListeners();

// Carga addEventListeners
function loadAddEventListeners(){
    formulario.addEventListener('submit', () => agregarToDo)
}   

