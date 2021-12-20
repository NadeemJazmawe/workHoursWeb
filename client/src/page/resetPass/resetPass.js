import React, { useState } from 'react'

export default function ResetPass() {

    const [email, setEmail] = useState("")

    function handleResetPass(e){
        e.preventDefault();

        console.log({"ok":true})
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
