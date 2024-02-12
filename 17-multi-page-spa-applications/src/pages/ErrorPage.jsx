import styles from '../modules/styles.module.css'

const ErrorPage = () => {
    return(
        <div>
            <h1 className={styles.errLogo}>Oops!</h1>
            <h3 className={styles.errText}>Something went wrong</h3>
        </div>
    )
}

export default ErrorPage