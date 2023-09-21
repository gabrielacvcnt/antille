const express = require("express");
const app = express();

app.use(express.json());

app.get('/', function (req, res) {
    console.log(req.query);

    return res.json({
        message: "Hello World"
    });
});

app.post('/', function (req, res) {
    return res.json(req.body);
});

app.listen(8080, console.log("Servidor está ouvindo na porta 80"));