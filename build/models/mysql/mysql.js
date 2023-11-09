"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'padeldb',
};
const connection = mysql_1.default.createConnection(config);
connection.connect((Error) => {
    if (Error) {
        console.error('Error al conectarse a la bbdd ', Error);
        throw Error;
    }
    console.log('Conexión a la bbdd Mysql Existosa');
});
exports.default = connection;
