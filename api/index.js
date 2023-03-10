import express  from "express";
import { client } from "./postgresqldb.js";

const app = express();

// middleware
// Middleware adalah function yang menangangi request sebelum sampai ke route.

app.use((req, _res, next) => {
    if(req.url === "/api/get") {
        console.log("Silahkan masuk");
    }
    else if(req.url === "/api/getdbpostgresql") {
        console.log("Silahkan masuk 1");
    }
    next();
});

// route

app.get("/api/get", async (_req, res) => {
    res.send("Tigana Reymansyah");
});

app.get("/api/getdbpostgresql", async (_req, res) => {
    res.send((await client.query("SELECT * FROM mahasiswa")).rows);
});

app.listen(3000, () => console.log("Server sedang berjalan..."));

// git reset adalah cara mengembalikan folder/file yang sudah di add