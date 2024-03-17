import { Controller, Get, Route,Post, Body, Request } from "tsoa";
import express from "express";
import  TodoService  from "../services/todo.service";
import { Todo } from "../entities/todo.entity";
import { AddTodoValidator } from "../validations/AddTodo.validation";
@Route("")
class TodoController extends Controller{
    @Get("/todos")
    async getTodo(){
        const todos = TodoService.get();
        return todos;
    }
    @Get("/todo/:TodoId")
    async getOneTodo(TodoId:string){
        const todo = TodoService.getOne(TodoId);
        return todo;
    }

    @Post("/todo")
    async AddTodo(@Request() req: express.Request, @Body() body:AddTodoValidator){
        const result = TodoService.AddTodo(body);
        return result;
    }

}
export {TodoController};