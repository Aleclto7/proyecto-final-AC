import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const Profile = () => {
    const {id} = useParams(); // Extraemos el parámetro 'id' de la URL usando useParams
    return (
        <Container className="min-vh-100 mt-4">
            <h1 className="mb-4">Profile</h1>
            <p>Welcome to the user profile, {id} </p>
            <p>Here you can view and edit your personal information.</p>
        </Container>
    )
}