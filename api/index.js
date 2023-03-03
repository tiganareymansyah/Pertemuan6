import express  from "express";

const app = express();

// middleware
// Middleware adalah function yang menangangi request sebelum sampai ke route.

app.use((req, _res, next) => {
    if(req.url === "/api/get") {
        console.log("Silahkan masuk");
        next();
    }
    else {
        console.log("Url salah");
    }
});

// route

app.get("/api/get", async (_req, res) => {
    res.send("Tigana Reymansyah");
});

app.listen(3000, () => console.log("Server sedang berjalan..."));

// git reset adalah cara mengembalikan folder/file yang sudah di add