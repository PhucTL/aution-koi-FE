import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import axios from "axios"
import { registerUser } from '../../redux/apiRequest';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            username: username, /* Khởi tạo biến thì phải trùng với tên trong dtb */
            password: password,
            fullname: fullname,
            phone: phone,
            address: address,
        }
        console.log(newUser)
        registerUser(newUser, dispatch, navigate)
    }

    return (
        <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
            <div class="modal-dialog" role="document">
                <div class="modal-content rounded-4 shadow">
                    <div class="modal-header p-5 pb-4 border-bottom-0" style={{ justifyContent: "center" }}>
                        <h1 class="fw-bold mb-0 fs-2">Register</h1>
                    </div>

                    <div class="modal-body p-5 pt-0">
                        <form onSubmit={handleRegister}>
                            <div class="form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control rounded-3"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <label for="floatingInput">Username</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input
                                    type="password"
                                    class="form-control rounded-3"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text"
                                    class="form-control rounded-3"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    onChange={(e) => setFullname(e.target.value)}
                                />
                                <label for="floatingInput">Full Name</label>
                            </div> 
                            <div class="form-floating mb-3">
                                <input type="text"
                                    class="form-control rounded-3"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <label for="floatingInput">Phone</label>
                            </div> 
                            <div class="form-floating mb-3">
                                <input type="text"
                                    class="form-control rounded-3"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <label for="floatingInput">Address</label>
                            </div> 
                            <button class="w-100 mb-2 btn btn-lg rounded-3 btn-outline-danger" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register