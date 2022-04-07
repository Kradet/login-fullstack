/* Establecemos las rutas que soporta la API */
import { Router } from "express";
import{CreateUsuario, GetListaUsuarios} from "../controllers/usuarios.controller";

/* Establecemos los middlewares */
const router = Router();
const cors = require("cors");

/* host/api/  con peticion get*/
router.route("/").get(cors(), GetListaUsuarios); // Regresa la lista de usuarios registrados

/* host/api con peticion post */
router.route("/").post(cors(),CreateUsuario); // Se ingresa un usuario a traves del req.body = {nombre, apellido, rfc ...}

export default router;