import React from "react"
import { Link, Outlet } from "react-router-dom"
import styles from '../style.module/style.module.css'

const LinkLayout: React.FC<{}> = () => {
    return(
        <div>
            <div className={styles.linkWrapper}>
                <Link className={styles.links } to={'/'}>MainPage</Link>
                <Link className={styles.links } to={'/create'}>CreatePage</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default LinkLayout