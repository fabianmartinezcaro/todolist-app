import { contenedorToDos } from "../selectores.js";
import {DB} from "../funciones.js";

export default class UI{

    mostrarToDo(){
        this.limpiarHTML()

        const objectStore = DB.transaction('todos').objectStore('todos');

        objectStore.openCursor().onsuccess = function (event){

            const cursor = event.target.result;

            if(cursor){

                const {tarea, horaInicio, horaTermino, id} = cursor.value;
                
                const divToDo = document.createElement('DIV');
                divToDo.classList.add('test');
                divToDo.dataset.id = id;

                const inputCheckBox = document.createElement('INPUT');
                inputCheckBox.type = 'checkbox';
                inputCheckBox.classList.add('test', 'input')

                const nombreToDo = document.createElement('')

                const infoHoraInicio = document.createElement('DIV');
                infoHoraInicio.classList.add('timing', 'p');
                infoHoraInicio.textContent = horaInicio;

                const infoHoraTermino = document.createElement('DIV');
                infoHoraTermino.classList.add('timing', 'p');


            }

        }


    }

    mostrarAlerta(contenedor, mensaje, alerta){

        const divAlerta = document.createElement('DIV');
        let condicionCumplida = false;

        if(alerta === 'error'){
            divAlerta.classList.add('error');
            divAlerta.textContent = mensaje;

            contenedor.appendChild(divAlerta);
            condicionCumplida = true;

        }else{
            divAlerta.classList.add('correcto');
            divAlerta.textContent = mensaje;

            contenedor.appendChild(divAlerta);
            condicionCumplida = true;
        }

        if(condicionCumplida){
            setTimeout(() => {
                divAlerta.remove();
            }, 3000);
        }

    }   

    limpiarHTML(){
        while(contenedorToDos.firstChild){
            contenedorToDos.removeChild(contenedorToDos.firstChild);
        }
    }

}