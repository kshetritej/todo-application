import { Controller, Route } from "tsoa";
import  TodoService  from "../services/todo.service";
@Route("/")
class TodoController extends Controller{
    async getTodo(){
        TodoService.get();
    }
}