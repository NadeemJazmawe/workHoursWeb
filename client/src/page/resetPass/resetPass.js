import React, { useState } from 'react'

function ResetPass() {

    const [Mail, setMail] = useState("")

    return (
        <div className="resetPassPage">

            <label>Mail </label>
            <input type="text" onChange={e => {
                setMail(e.target.value);
            }} required />
        </div>
    )
}
export default ResetPass;