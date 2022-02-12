import { useState } from 'react'

export const Input = (props) => {
    const [name, setName] = useState('Words')

    return (
        <>
            <p style={{ color: "red" }}>{name}</p>
            <input style={{ borderRadius: "50px" }} onChange={ev => setName(ev.target.value)} />
        </>
    )
}