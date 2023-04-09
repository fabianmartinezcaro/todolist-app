import {agregarToDo, crearDB, verificarDatos} from '../funciones.js'
import { inputToDo, inputHoraInicio, inputHoraTermino } from '../selectores.js'

export default class App{

    constructor(){
        this.startApp()
    }

    startApp(){
        inputToDo.addEventListener('input', verificarDatos);
        inputHoraInicio.addEventListener('input', verificarDatos);
        inputHoraTermino.addEventListener('input', verificarDatos);

        document.addEventListener('DOMContentLoaded', crearDB)
        formulario.addEventListener('submit', agregarToDo);
    }


}