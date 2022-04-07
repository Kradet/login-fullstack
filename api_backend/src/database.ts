/* Acceso a la base de datos */
import { createPool } from "mysql2/promise";

/* Funcion para conectar la base de datos */
export async function Conectar() {
    const connection = await createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        /* host: "189.215.84.103",
        user: "josue",
        password: "pass123",
        database: "practica2", */
    });

    return connection;
    
    /* if (process.env.NODE_ENV === "production") {
        const connection = await createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        });
        return connection;
    } else {
        const connection = await createPool({
            host: process.env.DB_DEV_HOST,
            user: process.env.DB_DEV_USER,
            password: process.env.DB_DEV_PASS,
            database: process.env.DB_DEV_NAME,
        });
        return connection;

    } */
}