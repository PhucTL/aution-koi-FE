import axios from "axios";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { getUserProfile, loginPayload } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const payload = {
            email: email,
            password: password
        }

        loginPayload(payload, dispatch, navigate)
    }
    

    return (
        <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0" style={{ justifyContent: "center" }}>
                        <h1 className="fw-bold mb-0 fs-2">Login</h1>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="modal-body p-5 pt-0">
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control rounded-3"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control rounded-3"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <a href="">Forgot password?</a>
                            <hr />
                            <button
                                className="w-100 mb-2 btn btn-lg rounded-3 btn-warning"
                                type="submit">
                                Log In
                            </button>
                            <button
                                className="w-100 py-2 mb-2 btn btn-outline-danger rounded-3"
                                type="button">
                                <svg
                                    className="bi me-1"
                                    width="16"
                                    height="16"><use xlink:href="#google"></use></svg>
                                Continue with Google <FaGoogle />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login