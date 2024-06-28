import Banner from '../../assets/banner.svg'
import Container from '../../components/container'
import Style from './register.module.css'
import Button from '../../components/button'

function Register() {
    return (
        <div className={Style.body}>
            <Container><img className={Style.img} src={Banner} alt="My Icon" /></Container>
            <div className={Style.divCon}>
                <Container><div className={Style.containerprimary}>
                    <h2></h2>
                    
                    <Button>Começar</Button>
                </div></Container>
            </div>
        </div>
    )
}

export default Register;