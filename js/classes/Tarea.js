export default class Tarea{
    constructor(){
        this.todos = [];
    }

    nuevoToDo(todo){
        this.todos = [...this.todos, todo]
    }

}