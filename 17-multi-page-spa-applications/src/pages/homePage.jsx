import img from '../img/spider-man-2099.jpg'
import styles from '../modules/styles.module.css'

const HomePage = () => {
    return(
        <div>
            <h3 className={styles.title}>SPIDER-MAN 2099</h3>
            <img className={styles.image} src={img} alt="spider-man_2099"></img>
        </div>
    )
}

export default HomePage