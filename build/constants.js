"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = exports.token = void 0;
const dotenv_1 = require("dotenv");
const Users_1 = require("./entites/Users");
(0, dotenv_1.config)({ path: "env" });
exports.token = process.env.TOKEN;
exports.databaseConfig = {
    type: 'postgres',
    username: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_NAME,
    entities: [Users_1.Users],
    synchronize: true
};
