import  express  from "express";

const app = express();

// midlewares
app.use(express.json());

// connections and listneres
app.listen(5000,() => console.log("server open"));
