import { useNavigate } from "react-router-dom"
import { login } from "../../services/auth"
import { useForm } from "../../hooks/useForm"

export default function Login() {
    const navigate = useNavigate()
    const [form, setForm] = useForm({ username: "", password: "", email: "" })
    const navegar = () => {
        navigate('/home')

    }

    const fazerLogin = async () => {
        const respostadaApi = await login(form)
        if (respostadaApi.accessToken) {
            navegar()
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <input name="username" onChange={setForm} />
            <input name="password" onChange={setForm} />
            <input type="text" name="email" onChange={setForm} />
            <button onClick={fazerLogin}>Fazer login</button>
        </div>
    )
}