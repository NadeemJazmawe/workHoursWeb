import React, { useState } from 'react'

function ResetPass() {

    const [email, setEmail] = useState("")

    function handleResetPass(e){
        e.preventDefault();
        fetch('/user/resetPass', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        }).then(r => r.json())
            .then(data => {
                if (data.ok) {
                    console.log({ "password changed": true });
                } else {
                    console.log({ "password changed": false });
                }
            })
        }
        
    return (
        <div className="resetPassPage">

            <form onSubmit={handleResetPass}>
                <label>Email </label>
                <input type="text" onChange={ e =>{
                    setEmail(e.target.value);
                }} required/>
                <br />
                <button type="submit">Sent reset email</button>
            </form>
           
        </div>
    )
}
export default ResetPass;