import { createConnection } from 'https://denolib.com/denolib/typeorm/mod.ts';

export function initTypeORM() {
return createConnection({
        type: "postgres", 
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "pwd",
        database: "postgres", // default database
        entities: [
            "./areas/**/*.entities.ts"
        ],
        synchronize: true,
        logging: true,
    });
}