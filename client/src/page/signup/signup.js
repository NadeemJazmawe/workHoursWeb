import React, { useState } from 'react'

function Signup() {
    const [ID, setID] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [passSub, setPassSub] = useState("");
    const [phone, setPhone] = useState("");

    function handleSignUp(e) {
        console.log({"ID": ID, "email": email, "pass":pass, "passSub":passSub, "phone":phone});
    }

    return (
        <div>
            <form onSubmit={handleSignUp}>
                <h1>SignUp</h1>
                <div>
                    <label>ID</label>
                    <input type="text" onChange={(e) => {
                        setID(e.target.value);
                    }} required></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" onChange={(e) => {
                        setEmail(e.target.value);
                    }} required></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={(e) => {
                        setPass(e.target.value);
                    }} required></input>
                </div>
                <div>
                    <label>submit Password</label>
                    <input type="password" onChange={(e) => {
                        setPassSub(e.target.value);
                    }} required></input>
                </div>
                <div>
                    <label>Phone</label>
                    <input type="number" onChange={(e) => {
                        setPhone(e.target.value);
                    }} required></input>
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup;