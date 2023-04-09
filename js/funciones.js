import { inputToDo, formulario, inputHoraInicio, inputHoraTermino } from "./selectores.js";
import UI from './classes/UI.js';
import Tarea from './classes/Tarea.js';

export let DB;

// Instancias
const ui = new UI();
const tarea = new Tarea();

// Objeto Tarea
const objetoTarea = {
    todo: '',
    horaInicio: '',
    horaTermino: ''
} 

export function verificarDatos(evento){
    objetoTarea[evento.target.name] = evento.target.value;
    console.log(evento.target.value)
}

export function agregarToDo(evento){
    evento.preventDefault();

    const {todo, horaInicio, horaTermino} = objetoTarea;

    if(todo === '' || horaInicio === '' || horaTermino === ''){
        ui.mostrarAlerta(formulario, 'Por favor, indique una tarea.', 'error');
        return;
    }else{
        objetoTarea.id = Date.now();
        tarea.nuevoToDo({...objetoTarea});


        ui.mostrarToDo();
        ui.mostrarAlerta(formulario, 'Se ha agregado una tarea!', 'correcto');
    }
}

export function eliminarToDo(){
}

export function crearDB(){
    const todoDB = window.indexedDB.open('todoDB', 1);

    todoDB.onerror = function () {
        console.log('No se ha podido crear la base de datos...')
    }

    todoDB.onsuccess = function () {
        console.log('Base de datos creada correctamente!')
        DB = todoDB.result;
        console.log(DB);
    }

    todoDB.onupgradeneeded = function (event) {
        const db = event.target.result;

        const objectStore = db.createObjectStore('todos', {
            keyPath: 'id',
            autoIncrement: true
        })

        objectStore.createIndex('todo', 'todo', {unique: false})
        objectStore.createIndex('horaInicio', 'horaInicio', {unique: false})
        objectStore.createIndex('horaTermino', 'horaTermino', {unique: false})

        console.log('DB y campos creados correctamente!')

    }

}
