import express from "express";
import AppDataSource from "./configs/db.config";
import EnvEnvironment from "./configs/env.config";
import { RegisterRoutes } from "./routes/routes";
import ErrorHandler from "./middlewares/errorHandler.middleware";
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../build/swagger.json');



const app = express();
app.use(express.json());
RegisterRoutes(app);
app.use(ErrorHandler.errorHandler);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected successfully!")
        app.listen(EnvEnvironment.PORT, () => console.log(`App is up on server ${EnvEnvironment.PORT}`))
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })