// Funcion que protege rutas en una aplicación React
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {   // Children hace recibe los componentes hijos que se pasan a esta función. 

    const Auth = localStorage.getItem('auth') === 'true';
    return Auth ? children : <Navigate to="/login" replace />;  // Por ende si el usuario está autenticado, renderiza los componentes hijos; de lo contrario, redirige al usuario a la página de inicio de sesión.
}