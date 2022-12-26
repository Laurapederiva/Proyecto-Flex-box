const express = require("express");

const app = express ();

const path = require("path");

const publicPath = path.resolve(__dirname, "./public");
app.use( express.static(publicPath) );

app.listen(3001, () => console.log("Servidor corriendo exitosamente en puerto 3001"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});