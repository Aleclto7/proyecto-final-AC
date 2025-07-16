import { useNavigate } from "react-router-dom";
import { useAuth }   from '../functions/UseAuthUtils'
import { useState } from "react";
import { Alert } from 'react-bootstrap'

export const Login = () => {
    
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("")
    const {login} = useAuth()
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if(login(user, pass)) {
            navigate('/admin')
        } else {
            setError("Invalid username or password");
        }
    }

    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-4">Login</h1>
            {error && <Alert variant='danger' role="alert">{error}</Alert>}
            <form onSubmit={handleLogin}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="text" placeholder='Login User' value={user} onChange={(e) => {setUser(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='mail'/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" placeholder="Enter your password" value={pass} onChange={(e) => {setPass(e.target.value)}} className="form-control" id="exampleInputPassword1" autoComplete="current-password"/>
            </div>
            <button type='submit' className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}