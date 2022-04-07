import { Link, useNavigate } from   "react-router-dom";
import '../styles/estilos.css'
export function Inicio(){
    const navigate = useNavigate();

    return(
        <header>
                <h1>¡Bienvenido!</h1>

            <nav>
                <ul>
                <li>
                    <Link to="/listar">Ver lista de usuarios</Link>
                </li>

                <li>
                    <Link to="/registro">Registrar Usuarios</Link>
                </li>
                </ul>
            </nav>
        </header>
    );
}