import { Controller, Get, Route,Post, Body, Request, Patch, Path } from "tsoa";
import express from "express";
import  TodoService  from "../services/todo.service";
import { AddTodoValidator } from "../validations/AddTodo.validation";
import { UpdateTodoValidator } from "../validations/updateTodo.validation";

@Route("")
class TodoController extends Controller{
    @Get("/todos")
    async getTodo(){
        const todos = await TodoService.get();
        return todos;
    }
    @Get("/todo/:TodoId")
    async getOneTodo(TodoId:string){
        const todo = await TodoService.getOne(TodoId);
        return todo;
    }

    @Post("/todo")
    async AddTodo(@Request() req: express.Request, @Body() body:AddTodoValidator){
        const result = await TodoService.AddTodo(body);
        return result;
    }

    @Patch("/todo/:TodoId")
    async UpdateTodo(@Path() TodoId: string, @Body() _body: UpdateTodoValidator){
        const update = await TodoService.UpdateTodo(TodoId, _body);
        return update;
    }

}
export {TodoController};