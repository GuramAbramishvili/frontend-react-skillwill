import { Link, Outlet } from "react-router-dom"
import styles from "../modules/styles.module.css"


function randomNumber(){
    return parseInt(Math.random() * 3) +1
}


const LinkLayout = () => {
    return(
        <div>
            <div className={styles.links}>
                <Link className={styles.link} to={'/'}>Home</Link>
                <Link className={styles.link} to={'/about'} >About</Link>
                <Link className={styles.link} to={`/params/${randomNumber()}`} >Fact</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default LinkLayout