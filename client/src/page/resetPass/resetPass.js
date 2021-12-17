import React, { useState } from 'react'

export default function ResetPass() {

    const [Mail, setMail] = useState("")

    return (
        <div className="resetPassPage">

            <label>Mail </label>
            <input type="text" onChange={ e =>{
                setMail(e.target.value);
            }} required/>
        </div>
    )
}
