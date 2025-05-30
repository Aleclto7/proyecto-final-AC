import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('auth', 'true');
        navigate('/profile/user123')
    }

    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-4">Login</h1>
            <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='mail'/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="current-password"/>
            </div>
            <button type="reset" className="btn btn-primary" onClick={handleLogin}>Submit</button>
            </form>
        </div>
    );
}