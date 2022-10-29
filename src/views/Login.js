import { useState } from "react"
import { useAuthContext } from "../context/authContext"

export default function Login() {

    const {login } = useAuthContext()
    const [magicWord, setMagicWord] = useState("");

    function handleInputChange(event) {
        setMagicWord(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(magicWord === "DFZ"){
            login();
        }
    }


    return (
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={magicWord} onChange={handleInputChange} />
            <button type="submit">Iniciar sesion</button>
        </form>
        </>
    
    )
}