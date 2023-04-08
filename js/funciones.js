import { inputToDo, formulario, inputHoraInicio, inputHoraTermino } from "./selectores.js";
import UI from './classes/UI.js';

// Instancias
const ui = new UI();

// Objeto Tarea
const objetoTarea = {
    tarea: '',
    horaInicio: '',
    horaTermino: ''
} 

export function verificarTarea(evento){
    objetoTarea[evento.target.name] = evento.target.value;
}

export function agregarToDo(evento){
    evento.preventDefault();

    if(inputToDo === '' || inputHoraInicio === '' || inputHoraTermino === ''){
        ui.mostrarAlerta(formulario, 'Por favor, indique una tarea.', 'error');
        return;
    }

}

export function eliminarToDo(){
    console.log(inputToDo.target.value)
}

export function crearDB(){

}
