const express = require("express");
const app = express();
const path = require("path");
const PORT = 27272;

app.get("/minerales", (req, res)=>{
    console.log("solicitud de minerales");
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end("minerales: Hay varios minerales como el hierro, cobre, carbon, piedra, uranio y etc");
});

app.get("/ciencias", (req, res)=>{
    console.log("solicitud de ciencia");
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end("ciencia: hay ciencias de muchos colores desde la roja y verde que son las primeras que se utilizan hasta la morada, blanca que son de endgame");
});


app.get("/", (req, res)=>{
    console.log("página principal");
    res.setHeader("content-Type", "text/html;charset=utf-8")
    res.end("<h1> Estas esta el la pagina principal y aca no sabia que hacer asi que podes hacer un get a minerales o cienca, esta relacionado a un jueguito llamado factorio</h1> ")
});

app.get("*", (req, res)=>{
    console.log("Error404");
    const error404 = path.join(__dirname, './img/404.jpg')
    res.sendFile(error404);
});


app.listen(PORT, ()=>{
    console.log("servidor escuchando en http://localhost:" + PORT)
});