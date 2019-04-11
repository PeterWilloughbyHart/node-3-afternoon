require("dotenv").config();
const massive = require("massive");
const express = require("express");
const products_controller = require("./products_controller")
const app = express();


massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance);
})
.catch (err => console.log(err));

app.use(express.json());

app.post("/api/products", products_controller.create);

app.get("/api/products", products_controller.getAll);

app.get("/api/products/:id", products_controller.getOne);

app.put("/api/products/:id", products_controller.update);

app.delete("/api/products/:id", products_controller.remove);


const { SERVER_PORT, CONNECTION_STRING } = process.env; console.log(SERVER_PORT)
app.listen(SERVER_PORT, () => {
    console.log("mic check one two")})