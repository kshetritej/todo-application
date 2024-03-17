import { Todo } from "../entities/todo.entity";


class TodoService {
    async get(){
        return await Todo.find();
    }
}

export default new TodoService;