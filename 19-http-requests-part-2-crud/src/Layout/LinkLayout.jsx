import { Link, Outlet } from "react-router-dom"
import styles from '../css_modules/todoList.module.css'

const LinkLayout = () => {
    return(
        <div>
            <div className={styles.menu}>
                <Link className={styles.menu_item} to={'/'}>MainPage</Link>
                <Link className={styles.menu_item} to={'/create'} >CreatePage</Link>
                <Link className={styles.menu_item} to={'/done'} >DonePage</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default LinkLayout