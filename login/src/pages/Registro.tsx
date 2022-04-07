import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/estilos.css'
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
		<>
		<div className="rectangulo"><h1>Cómputo en la Nube</h1></div>
		<section>
			
			<form className="caja" action="" method="post" onSubmit={handleSubmit}>
				<h2>Registro de usuarios</h2>

					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						id="nombre"
						name="nombre"
						onChange={handleChange}
					/>


					<label htmlFor="apellidos">Apellido</label>
					<br />
					<input
						type="text"
						id="apellidos"
						name="apellidos"
						onChange={handleChange}
					/>


					<label htmlFor="rfc">RFC</label>
					<br />
					<input
						type="text"
						id="rfc"
						name="rfc"
						onChange={handleChange}
					/>


					<label htmlFor="direccion">Direccion</label>
					<br />
					<input
						type="text"
						id="direcccion"
						name="direccion"
						onChange={handleChange}
					/>


                    <label htmlFor="telefono">Telefono</label>
					<br />
					<input
						type="text"
						id="telefono"
						name="telefono"
						onChange={handleChange}
					/>
 

                    <label htmlFor="email">E-Mail</label>
					<br />
					<input
						type="text"
						id="email"
						name="email"
						onChange={handleChange}
					/>
            <button className="boton" type="submit">
                Registrar Usuario
            </button>
			</form>
		</section>
		</>        
	);
}
