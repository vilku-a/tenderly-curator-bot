import {config} from "dotenv";
import {ConnectionOptions} from "typeorm";
import {Users} from "./entites/Users"
import {env} from "process";
config({path: 'env'})

export const token = env.TOKEN
export const databaseConfig: ConnectionOptions = {
    type: 'postgres',
    username: env.PG_USER,
    password: env.PG_PASS,
    database: env.PG_NAME,
    entities: [Users],
    synchronize: true
}
