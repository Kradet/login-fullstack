import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Registro() {
	const navigate = useNavigate();
	const [datos, setDatos] = useState({
		nombre: "",
		apellido: "",
		rfc: "",
		direccion: "",
		telefono: "",
		email: "",
	});

	/* Cuando los campos cambian, se actualizan los datos */
	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		if ((event.target.name === "nombre")) {
			setDatos({
				...datos,
				nombre: event.target.value,
			});
		}
		if ((event.target.name === "apellidos")) {
			setDatos({
				...datos,
				apellido: event.target.value,
			});
		}
		if ((event.target.name === "rfc")) {
			setDatos({
				...datos,
				rfc: event.target.value,
			});
		}
		if ((event.target.name === "direccion")) {
			setDatos({
				...datos,
				direccion: event.target.value,
			});
		}
		if ((event.target.name === "telefono")) {
			setDatos({
				...datos,
				telefono: event.target.value,
			});
		}
		if ((event.target.name === "email")) {
			setDatos({
				...datos,
				email: event.target.value,
			});
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const requestInit: RequestInit = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				nombre: datos.nombre,
				apellidos: datos.apellido,
				rfc: datos.rfc,
				direccion: datos.direccion,
				telefono: datos.telefono,
				email: datos.email,
			}),
		};

		const peticion = await fetch(
			`${process.env.REACT_APP_API}`,
			requestInit
		);

		if ((await peticion.status) === 200) {
			alert("Usuario creado correctamente");
			navigate("/");
		}
	};

	return (
		<div className="">
			<form action="" method="post" onSubmit={handleSubmit}>
				<h1>Registro de usuarios</h1>
				<div className="">
					<label htmlFor="nombre">Nombre</label>
					<br />
					<input
						type="text"
						id="nombre"
						name="nombre"
						onChange={handleChange}
					/>
				</div>
				<div className="">
					<label htmlFor="apellidos">Apellido</label>
					<br />
					<input
						type="text"
						id="apellidos"
						name="apellidos"
						onChange={handleChange}
					/>
				</div>
				<div className="">
					<label htmlFor="rfc">RFC</label>
					<br />
					<input
						type="text"
						id="rfc"
						name="rfc"
						onChange={handleChange}
					/>
				</div>
				<div className="">
					<label htmlFor="direccion">Direccion</label>
					<br />
					<input
						type="text"
						id="direcccion"
						name="direccion"
						onChange={handleChange}
					/>
				</div>
                <div className="">
                    <label htmlFor="telefono">Telefono</label>
					<br />
					<input
						type="text"
						id="telefono"
						name="telefono"
						onChange={handleChange}
					/>
                </div>
                <div className="">
                    <label htmlFor="email">E-Mail</label>
					<br />
					<input
						type="text"
						id="email"
						name="email"
						onChange={handleChange}
					/>
                </div>
            <button type="submit">
                Registrar Usuario
            </button>
			</form>

		</div>
        
	);
}
