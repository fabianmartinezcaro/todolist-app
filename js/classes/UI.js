import { contenedorToDos, listadoCardsToDo } from "../selectores.js";
import {DB} from "../funciones.js";

export default class UI{

    mostrarToDo(){
        // this.limpiarHTML()

        const objectStore = DB.transaction('todos').objectStore('todos');

        objectStore.openCursor().onsuccess = function (event){

            const cursor = event.target.result;

            if(cursor){

                const {tarea, horaInicio, horaTermino, id} = cursor.value;
                console.log(tarea)
                console.log('aun no veo nada')
                
                const divToDo = document.createElement('LI');
                divToDo.classList.add('#todo');
                divToDo.dataset.id = id;

                const parrafoNombreToDo = document.createElement('P');
                parrafoNombreToDo.textContent = tarea;
                divToDo.appendChild(parrafoNombreToDo)

                console.log('Agregando tarea: ' + tarea);
                listadoCardsToDo.appendChild(divToDo);
                cursor.continue();

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

    // limpiarHTML(){
    //     while(listadoCardsToDo.firstChild){
    //         listadoCardsToDo.removeChild(listadoCardsToDo.firstChild);
    //     }
    // }

}