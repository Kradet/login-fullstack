process.env.NODE_ENV === "production" ? null: require("dotenv").config();
/* Importamos las librerias */
import express, { Application } from "express";

/* Importamos las rutas */
import UsuarioRouter from "./routes/usuarios.routes";

export class App {
    private app: Application;
    cors = require("cors");

    /* El parametro port puede pasarse o no, si no se pasa usar el puerto por defecto */
    constructor(private port?: number) {
        this.app  = express();
        this.app.use(this.cors({origin:"*"}));
        this.settings();
        this.middlewares();
        this.routes();
    }

    /* Establecemos los puertos por defectos  */
    settings() {
        this.app.set("port", this.port || process.env.PORT || 4000);
    }

    /* Establecemos los middlewares */
    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    /* Establecemos las rutas a usar */
    routes(){
        this.app.use("/api", UsuarioRouter)
    }

    /* Usamos la clase en el puerto establecido  */
    async Listen(){
        await this.app.listen(this.app.get("port"));
        console.log("Funcionando en el puerto ", this.app.get("port"));
        /* console.log(process.env.DB_HOST, "  ") */
        
    }
}
