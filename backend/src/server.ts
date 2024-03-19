import cors from "cors";
import express from "express";
import AppDataSource from "./configs/db.config";
import EnvEnvironment from "./configs/env.config";
import { RegisterRoutes } from "./routes/routes";
import ErrorHandler from "./middlewares/errorHandler.middleware";
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../build/swagger.json');



const app = express();
app.use(express.json());
app.use(cors());
RegisterRoutes(app);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(ErrorHandler.errorHandler);
app.use(ErrorHandler.notFoundHandler);

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected successfully!")
        app.listen(EnvEnvironment.PORT, () => console.log(`App is up on server ${EnvEnvironment.PORT}`))
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })