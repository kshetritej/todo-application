import { DataSource } from "typeorm"
import EnvEnvironment from "./env.config"

const AppDataSource = new DataSource({
    type: EnvEnvironment.DB_TYPE as 'postgres',
    host:EnvEnvironment.DB_HOST, 
    port: +EnvEnvironment.DB_PORT,
    username:EnvEnvironment.DB_USERNAME, 
    password:EnvEnvironment.DB_PASSWORD,
    database: EnvEnvironment.DB_NAME,
    entities: [`${__dirname}/../entities/*.entity.ts`],
    synchronize: true,
})

export default AppDataSource;