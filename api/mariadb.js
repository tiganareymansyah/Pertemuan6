import mariadb from "mariadb";

const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    database: "pfjs_pertemuan6",
});

const connect = await pool.getConnection();

const result = await connect.query("SELECT * FROM mahasiswa");
console.log(result[1].nama_mahasiswa);