import Banner from '../../assets/banner.svg'
import Container from '../../components/container'
import Style from './Onboarding.module.css'
import Button from '../../components/button'
import { useNavigate } from 'react-router-dom';

export default function Onboarding() {

    const navigation = useNavigate();
    const navegar = (rota) => {
        navigation(rota);
    }

    return (
        <div className={Style.body}>
            <Container><img className={Style.img} src={Banner} alt="My Icon" /></Container>
            <div className={Style.divCon}>
                <Container><div className={Style.containerprimary}>
                    <h2 className={Style.h2}>Lista de Tarefas</h2>
                    <p className={Style.p}>Mantenha-se organizado: seu aplicativo definitivo de lista de tarefas. <b></b>Um aplicativo de lista de tarefas é uma ferramenta digital de gerenciamento de tarefas
                        projetadas para ajudar os usuários a organizar e priorizar suas atividades e responsabilidades diárias.</p>
                    <Button onClick={() => navegar('/register')}>Começar</Button>
                    <button onClick={() => navegar("/login")} className={Style.btnEnt}>Já tem uma conta? Entrar</button>
                </div></Container>
            </div>
        </div>
    )
}