import { Todo } from "../entities/todo.entity";
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
            // Todo.insert({
            //     Title : body.Title,
            //     Description : body.Description,
            //     Urgency : body.Urgency,
            //     DueDate : body.DueDate,
            //     CreatedAt : new Date().toString()

            // })
            const todo = new Todo();
            todo.Title = body.Title;
            todo.Description = body.Description;
            todo.Urgency = body.Urgency;
            todo.DueDate = body.DueDate;
            todo.CreatedAt = Date.now().toString();
            todo.save();

            return todo;
        } catch (error) {
            return {
                "error":"sorry dude can't perform the action",
            }
        }
    }
}

export default new TodoService;