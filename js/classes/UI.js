import { contenedorToDos, listadoCardsToDo } from "../selectores.js";
import {DB, eliminarToDo} from "../funciones.js";

export default class UI{

    mostrarToDo(){
        this.limpiarHTML()

        const objectStore = DB.transaction('todos').objectStore('todos');

        objectStore.openCursor().onsuccess = function (event){

            const cursor = event.target.result;

            if(cursor){

                const {todo, horaInicio, horaTermino, id} = cursor.value;
                console.log(todo)
                
                const divToDo = document.createElement('LI');
                divToDo.classList.add('todo');
                divToDo.dataset.id = id;

                const inputCheckBox = document.createElement('INPUT');
                inputCheckBox.classList.add('todo-check')
                inputCheckBox.type = 'checkbox';
                divToDo.appendChild(inputCheckBox);

                const parrafoNombreToDo = document.createElement('P');
                parrafoNombreToDo.classList.add('nombreToDo')
                parrafoNombreToDo.textContent = todo;
                divToDo.appendChild(parrafoNombreToDo)

                const parrafoHoraInicio = document.createElement('P');
                parrafoHoraInicio.classList.add('horaInicio')
                parrafoHoraInicio.textContent = horaInicio;

                const parrafoHoraTermino = document.createElement('P');
                parrafoHoraTermino.classList.add('horaTermino')
                parrafoHoraTermino.textContent = horaTermino;

                const divTiempo = document.createElement('DIV');
                divTiempo.classList.add('info-todo-tiempo')
                divTiempo.appendChild(parrafoHoraInicio);
                divTiempo.appendChild(parrafoHoraTermino);
                divToDo.appendChild(divTiempo);

                const botonEliminar = document.createElement('A');
                botonEliminar.style.cursor = 'pointer';
                botonEliminar.classList.add('todo-delete')
                botonEliminar.textContent = 'Eliminar';
                botonEliminar.onclick = () => {
                    eliminarToDo(id);
                }
                divToDo.appendChild(botonEliminar);

                console.log('Agregando tarea: ' + todo);
                listadoCardsToDo.appendChild(divToDo);
                cursor.continue();

            }

            if(listadoCardsToDo.innerHTML === ''){
                const alerta = document.createElement('p');
                alerta.classList.add('alertaVacio')
                alerta.textContent = 'No hay tareas';

                listadoCardsToDo.appendChild(alerta)
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
        while(listadoCardsToDo.firstChild){
            listadoCardsToDo.removeChild(listadoCardsToDo.firstChild);
        }
    }

}