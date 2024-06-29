import Banner from '../../assets/banner.svg'
import Container from '../../components/container'
import Style from './login.module.css'
import Button from '../../components/button'
import Input from '../../components/input'
import { useNavigate } from "react-router-dom"
import { login } from "../../services/auth"
import { useForm } from "../../hooks/useForm"

export default function Login() {
    const navigate = useNavigate()
    const [form, setForm] = useForm({ username: "", password: "" })
    const navegar = () => {
        navigate('/register')

    }

    const fazerLogin = async () => {
        const respostadaApi = await login(form)
        if (respostadaApi.accessToken) {
            navegar()
        }
    }

    return (
        <div className={Style.body}>
            <Container><img className={Style.img} src={Banner} alt="My Icon" /></Container>
            <div className={Style.divCon}>
                <Container><div className={Style.containerprimary}>
                    <h1 className={Style.log}>Login</h1>
                    <Input type="text" name="username" style={{marginBottom: '20px'}} onChange={setForm} placeholder={'Nome'}></Input>
                    <Input type="password" name="password" style={{marginBottom: '20px'}} onChange={setForm} placeholder={'Senha'}></Input>
                    <Input type="text" name="email" style={{marginBottom: '20px'}} onChange={setForm} placeholder={'E-mail'}></Input>
                    <Button onClick={fazerLogin}>Fazer login</Button>
                    <div className={Style.entrar}>
                        <span>Não tem uma conta?</span>
                    <button onClick={() => navegar()} className={Style.btnEnt}>Registre-se</button>
                    </div>
                </div></Container>
            </div>
        </div>
    )
}