import Swal from "sweetalert2";

export const Login = () => {
    
    const alert = () => {
        Swal.fire({
        title: "Drag me!",
        icon: "success",
        draggable: true,
        showConfirmButton: false,
        timer: 800,
        backdrop: `
        rgba(0, 0, 0, 0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
        `
        });
    }

    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-4">Login</h1>
            <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="reset" class="btn btn-primary" onClick={alert}>Submit</button>
            </form>
        </div>
    );
}