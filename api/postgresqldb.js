import postgres from "pg";

const { Client } = postgres;

export const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "tigana",
    database: "integer",
});

await client.connect();