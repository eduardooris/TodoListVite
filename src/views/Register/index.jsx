import Banner from '../../assets/banner.svg'
import Container from '../../components/container'
import Style from './register.module.css'
import Button from '../../components/button'
import Input from '../../components/input'

function Register() {
    return (
        <div className={Style.body}>    
            <Container><img className={Style.img} src={Banner} alt="My Icon" /></Container>
            <div className={Style.divCon}>
                <Container><div className={Style.containerprimary}>
                    <h1 className={Style.reg}>Registre-se</h1>
                    <Input style={{marginBottom: '15px'}} placeholder={'Primeiro Nome'}> </Input>
                    <Input style={{marginBottom: '15px'}} placeholder={'Sobrenome'}></Input>
                    <Input style={{marginBottom: '15px'}} placeholder={'E-mail'}></Input>
                    <Input style={{marginBottom: '15px'}} placeholder={'Senha'}></Input>
                    <Input style={{marginBottom: '30px'}} placeholder={'Confirmar Senha'}></Input>
                    <Button>Começar</Button>
                </div></Container>
            </div>
        </div>
    )
}

export default Register;