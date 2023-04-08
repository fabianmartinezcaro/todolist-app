export default class UI{

    mostrarAlerta(contenedor, mensaje, alerta){

        if(alerta === 'error'){
            const divAlerta = document.createElement('DIV');
            div.classList.add('error');
            div.textContent = mensaje;
        }else{
            const divAlerta = document.createElement('DIV');
            div.classList.add('correcto');
            div.textContent = mensaje;
        }

    }   

}