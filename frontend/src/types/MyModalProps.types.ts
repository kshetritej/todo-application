import { todo } from "./todo.types"

export type MyModalProps = {
    task?: todo;
    mode: string;
    trigger: any;
    buttonVariant: string;
    editTodo?: any;
    todoId?: string;
        
    
}