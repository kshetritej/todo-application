import { Todo } from "../entities/todo.entity";
import { UpdateTodoValidator } from "../validations/updateTodo.validation";
import { AddTodoValidator } from "../validations/AddTodo.validation";


class TodoService {
    async get() {
        return await Todo.find();
    }

    async getOne(TodoId: string) {
        return await Todo.findOne({
            where: {
                TodoId,
            }
        });
    }

    async AddTodo(body: AddTodoValidator) {
        try {
            const todo = new Todo();
            todo.Title = body.Title;
            todo.Description = body.Description;
            todo.Urgency = body.Urgency;
            todo.DueDate = body.DueDate;
            todo.CreatedAt = Date.now().toString();
            await todo.save();

            return todo;
        } catch (error) {
            return {
                "error":"sorry dude can't perform the action",
            }
        }
    }

    async UpdateTodo(TodoId: string, _body:UpdateTodoValidator){
        const todo = await Todo.findOne({
            where:{
                TodoId,
            }
        });
        
        if(!todo) {
            console.log(`No todo in list of id ${TodoId}`);
            return;
        }
        todo.Title = _body.Title ?? todo.Title,
        todo.Description = _body.Description ?? todo.Description,
        todo.Urgency = _body.Urgency ?? todo.Urgency,
        todo.DueDate == _body.DueDate ?? todo.DueDate,
    
        await todo.save();
        return  todo;
    }
}

export default new TodoService;