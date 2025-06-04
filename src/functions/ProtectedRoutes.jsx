// Funcion que protege rutas en una aplicación React
import { useAuth } from "./UseAuthUtils";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {   // Children hace recibe los componentes hijos que se pasan a esta función. 
    const { token } = useAuth();

    return token ? children : <Navigate to='/login' replace/>;  // Por ende si el usuario está autenticado, renderiza los componentes hijos; de lo contrario, redirige al usuario a la página de inicio de sesión.
}