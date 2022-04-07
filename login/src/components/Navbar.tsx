import { NavLink } from "react-router-dom";

export function Navbar() {
	return (
		<div className="">
			<ul>
				<li>
					<NavLink to="/">Inicio</NavLink>
				</li>
				<li>
					<NavLink to="/registro">Registro</NavLink>
				</li>
				<li>
					<NavLink to="/listar">Listar</NavLink>
				</li>
			</ul>
		</div>
	);
}
