import React, { useState, useEffect } from 'react'

function HomePage() {
    const [start, setStart] = useState(new Date());
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("changed!");
        setStart(new Date());
        // setCounter(new Date() - start);
    }, [start]);
    return (
        <div>
            <label>{`${start}`}</label>
            <br />
            <label>{`${counter}`}</label>
            <br />
            <button></button>
        </div>
    )
}

export default HomePage;