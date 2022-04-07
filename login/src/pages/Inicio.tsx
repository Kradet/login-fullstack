import { Link, useNavigate } from   "react-router-dom";

export function Inicio(){
    const navigate = useNavigate();

    return(
        <div className="">
            <div className="">
                <h1>Bienvenido</h1>
                
            </div>
            <div className="">
                <button>
                    <Link to="/listar">Ver lista de usuarios</Link>
                </button>
            </div>
            <div className="">
                <button>
                    <Link to="/registro">Registrar Usuarios</Link>
                </button>
            </div>
        </div>
    );
}