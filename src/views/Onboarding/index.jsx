import Banner from '../../assets/banner.svg'
import Button from '../../components/button'
import Design from '../../Design/Colors'
export default function Onboarding() {
    return (
        <div style={{ background: Design.backgroundCardOnboarding }}>
            <h1>Onboarding</h1>
            <img src={Banner} alt="My Icon" />
            <Button>Get Started </Button>
        </div>
    )
}