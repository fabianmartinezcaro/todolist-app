import {agregarToDo, verificarTarea} from '../funciones.js'
import { inputToDo } from '../selectores.js'

export default class App{

    constructor(){
        this.startApp()
    }

    startApp(){
        inputToDo.addEventListener('input', verificarTarea)
    
        
        formulario.addEventListener('submit', () => agregarToDo) 
    }


}