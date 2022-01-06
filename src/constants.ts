import {config} from "dotenv";
import {ConnectionOptions} from "typeorm";
import {Users} from "./entites/Users"

config({path: "env"})

export const token = process.env.TOKEN
export const databaseConfig: ConnectionOptions = {
    type: 'postgres',
    username: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_NAME,
    entities: [Users],
    synchronize: true
}
