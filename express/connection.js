const { Pool } = require('pg');

const conexion = {
    user: 'postgres',
    port: '5432',
    database: 'safelock',
    host: 'localhost',
    password: '123',
};

const pool = new Pool(conexion);

module.exports = {
    query: (text, params) => pool.query(text, params),
};
