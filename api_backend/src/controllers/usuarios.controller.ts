/* Importamos las librerías necesarias */
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import { Conectar } from "../database";

/* Funcion que regresa la lista de usuarios */
export async function GetListaUsuarios(
	req: Request,
	res: Response
): Promise<Response> {
	const coneccion = await Conectar();
	const usuarios = await coneccion.query("select * from usuario");

	return res.json(usuarios[0]);
}

/* Funcion par crear usuarios */
/* Los usuarios tienen: nombre, apellido, rfc, direccion, telefono, email */
export async function CreateUsuario(
	req: Request,
	res: Response
): Promise<Response> {
	const { nombre, apellidos, rfc, direccion, telefono, email } = req.body;
	const coneccion = await Conectar();

	try {
		await coneccion.query(
			"insert into usuario (nombre, apellidos, rfc, direccion, telefono, email) values (?,?,?,?,?,?)",
			[nombre, apellidos, rfc, direccion, telefono, email]
		);
	} catch (error) {
		console.log("Ha ocurrido un error en la insercion ", error);
		res.sendStatus(400);
	}

	return res.json({
		result: "true",
		message: "Usuario insertado correctamente",
	});
}
