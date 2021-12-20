import React, {useState} from 'react'

export default function ChangePass() {

    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    function handleChangePass(e)  {
        e.preventDefault();
        if(password === password2){
            if ((window.location.search.substring(1).length) !== 0) {
                const token = "" + window.location.search.substring(1);
            
            fetch(`/user/changePassword?${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ newPass: password })
            }).then(r => r.json())
                .then(data => {
                    if (data.ok) {
                        console.log({ "password changed": true });
                    } else {
                        console.log({ "password changed": false });
                    }
                })
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleChangePass}>
                <label>New Password </label>
                <input type="password" onChange={ e =>{
                    setPassword(e.target.value);
                }} required/>
                <label>New Password </label>
                <input type="password" onChange={ e =>{
                    setPassword2(e.target.value);
                }} required/>
                <br />
                <button type="submit">change email</button>
            </form>
        </div>
    )
}
