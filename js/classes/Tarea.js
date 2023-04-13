export default class Tarea{
    constructor(){
        this.todos = [];
    }

    nuevoToDo(todo){
        this.todos = [...this.todos, todo]
    }

    borrarToDo(todoSeleccionado){
        this.todos = this.todos.filter(todo => todo.id !== todoSeleccionado.id);
        console.log(this.todos)
    }

}