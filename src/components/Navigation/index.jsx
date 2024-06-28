import { Link } from "react-router-dom"
import Design from "../../Design/Colors"
export default function Navigation() {
    return (
        <div style={styles.container}>
            <Link style={styles.text} to={'/'}>Login</Link>
            <Link style={styles.text} to={'/home'}>Home</Link>
        </div>
    )
}

const styles = {
    container: {
        background: Design.backgroundMenu,
        display: "flex",
        flexDirection: "column",
        height: "96vh",
        width: 300,
        borderRadius: 40,
        padding: 30,
        margin: 20
    },
    text: {
        textDecoration: "none",
        color: Design.colorText,
        ...Design.typography.h2
    }
}