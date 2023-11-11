import mysql, { ConnectionOptions } from 'mysql2/promise';

const config: ConnectionOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'padeldb',
    
};

const connection =  mysql.createConnection(config);

export default connection;