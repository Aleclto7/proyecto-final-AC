import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const Admin = () => {
    const {id} = useParams(); // Extraemos el parámetro 'id' de la URL usando useParams
    return (
        <Container className="min-vh-100 mt-4 ">
            <h1 className="mb-4">Admin</h1>
            <p>Bienvenido al perfil Administrador, {id} </p>
            <p>Aquí puedes ver y editar tu Pagina.</p>
        </Container>
    )
}