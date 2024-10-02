import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import axios from "axios"
import { registerUser } from '../../redux/apiRequest';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            email: email, /* Khởi tạo biến thì phải trùng với tên trong dtb */
            name: name,
            avatar: avatar,
            password: password,
        }

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
                                    type="email"
                                    class="form-control rounded-3"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text"
                                    class="form-control rounded-3"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label for="floatingInput">Name</label>
                            </div> 
                            <div class="form-floating mb-3">
                                <input type="text"
                                    class="form-control rounded-3"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    onChange={(e) => setAvatar(e.target.value)}
                                />
                                <label for="floatingInput">Avatar</label>
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
                            <button class="w-100 mb-2 btn btn-lg rounded-3 btn-outline-danger" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register