import React, { ChangeEvent, useState, useEffect } from "react";

export function Listar() {
	const [listaUsuarios, setListaUsuarios] = useState([]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API}`)
			.then((res) => res.json())
			.then((data) => {
				setListaUsuarios(data);
			});
	}, []);

	return (
		<div className="">
			{listaUsuarios.map(
				({ nombre, apellido, rfc, direccion, telefono, email }) => {
					return (
						<div className="">
							<table>
								<tr>
									<th>Nombre</th>
									<th>Apellidos</th>
									<th>RFC</th>
									<th>Dirección</th>
									<th>Telefono</th>
									<th>E-Mail</th>
								</tr>
								<tr>
									<td>{nombre}</td>
									<td>{apellido}</td>
									<td>{rfc}</td>
									<td>{direccion}</td>
									<td>{telefono}</td>
									<td>{email}</td>
								</tr>
							</table>
						</div>
					);
				}
			)}
		</div>
	);
}
