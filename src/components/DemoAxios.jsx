import React from "react"
import axios from "axios"

function DemoAxios() {

    const getAxios = () => {
        axios.get("http://localhost:8000/users")
            //axios sẽ tạo 1 object respone sau khi axios get   
            .then((res) => console.log(res.data))
            //bắt trường hợp lỗi
            .catch((err) => console.log(err));
    }

    const postAxios = () => {
        const data = { name: "Tran Thi F", email: "f@gmail.com", password: "f6" }

        axios.post("http://localhost:8000/users", data)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }

    const putAxios = () => {
        const data = { email: "g@gmail.com", password: "gd49f", role: 1, fullname: "Le Thi G" }
        //put: update toàn bộ attribute
        axios.put("http://localhost:8000/users/d49f", data)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }

    const patchAxios = () => {
        const data = { id: 7, password: "g7" }
        //patch: update attribute được gọi
        axios.patch("http://localhost:8000/users/d49f", data)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }

    const deleteAxios = () => {

        axios.delete("http://localhost:8000/users/7b7b")
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    return (
        <div>
            <h3>Demo Axios API</h3>
            <button onClick={getAxios}>GET API in Axios</button>
            <button onClick={postAxios}>POST API in Axios</button>
            <button onClick={putAxios}>PUT API in Axios</button>
            <button onClick={patchAxios}>PATCH API in Axios</button>
            <button onClick={deleteAxios}>DELETE API in Axios</button>
        </div>
    )
}

export default DemoAxios