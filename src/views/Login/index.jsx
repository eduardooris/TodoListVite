import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()

    const navegar = () => {
        navigate('/home')

    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={navegar}>ir para home</button>
        </div>
    )
}