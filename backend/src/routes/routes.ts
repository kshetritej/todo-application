/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TodoController } from './../controllers/todo.controller';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "Todo": {
        "dataType": "refObject",
        "properties": {
            "TodoId": {"dataType":"string","required":true},
            "Title": {"dataType":"string","required":true},
            "Description": {"dataType":"string","required":true},
            "Urgency": {"dataType":"string","required":true},
            "DueDate": {"dataType":"string","required":true},
            "CreatedAt": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AddTodoValidator": {
        "dataType": "refObject",
        "properties": {
            "Title": {"dataType":"string","required":true},
            "Description": {"dataType":"string","required":true},
            "Urgency": {"dataType":"string","required":true},
            "DueDate": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateTodoValidator": {
        "dataType": "refObject",
        "properties": {
            "Title": {"dataType":"string"},
            "Description": {"dataType":"string"},
            "Urgency": {"dataType":"string","required":true},
            "DueDate": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsTodoController_getTodo: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/todos',
            ...(fetchMiddlewares<RequestHandler>(TodoController)),
            ...(fetchMiddlewares<RequestHandler>(TodoController.prototype.getTodo)),

            async function TodoController_getTodo(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTodoController_getTodo, request, response });

                const controller = new TodoController();

              await templateService.apiHandler({
                methodName: 'getTodo',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTodoController_getOneTodo: Record<string, TsoaRoute.ParameterSchema> = {
                TodoId: {"in":"path","name":"TodoId","required":true,"dataType":"string"},
        };
        app.get('/todo/:TodoId',
            ...(fetchMiddlewares<RequestHandler>(TodoController)),
            ...(fetchMiddlewares<RequestHandler>(TodoController.prototype.getOneTodo)),

            async function TodoController_getOneTodo(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTodoController_getOneTodo, request, response });

                const controller = new TodoController();

              await templateService.apiHandler({
                methodName: 'getOneTodo',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTodoController_AddTodo: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                body: {"in":"body","name":"body","required":true,"ref":"AddTodoValidator"},
        };
        app.post('/todo',
            ...(fetchMiddlewares<RequestHandler>(TodoController)),
            ...(fetchMiddlewares<RequestHandler>(TodoController.prototype.AddTodo)),

            async function TodoController_AddTodo(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTodoController_AddTodo, request, response });

                const controller = new TodoController();

              await templateService.apiHandler({
                methodName: 'AddTodo',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTodoController_UpdateTodo: Record<string, TsoaRoute.ParameterSchema> = {
                TodoId: {"in":"path","name":"TodoId","required":true,"dataType":"string"},
                _body: {"in":"body","name":"_body","required":true,"ref":"UpdateTodoValidator"},
        };
        app.patch('/todo/:TodoId',
            ...(fetchMiddlewares<RequestHandler>(TodoController)),
            ...(fetchMiddlewares<RequestHandler>(TodoController.prototype.UpdateTodo)),

            async function TodoController_UpdateTodo(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTodoController_UpdateTodo, request, response });

                const controller = new TodoController();

              await templateService.apiHandler({
                methodName: 'UpdateTodo',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTodoController_DeleteTodo: Record<string, TsoaRoute.ParameterSchema> = {
                TodoId: {"in":"path","name":"TodoId","required":true,"dataType":"string"},
        };
        app.delete('/todo/:TodoId',
            ...(fetchMiddlewares<RequestHandler>(TodoController)),
            ...(fetchMiddlewares<RequestHandler>(TodoController.prototype.DeleteTodo)),

            async function TodoController_DeleteTodo(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTodoController_DeleteTodo, request, response });

                const controller = new TodoController();

              await templateService.apiHandler({
                methodName: 'DeleteTodo',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
