import styles from "../styles/Login.module.css";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Login() {
    return (
        <div>
            <main className={styles.main}>
                <div className={styles.container1}></div>
                <div className={styles.container2}>
                    <div className={styles.infoContainer}>
                        <div className={styles.icons}><FontAwesomeIcon icon={faTwitter} /></div>
                        <h1 className={styles.title}>
                            See what's <br /> happening
                        </h1>
                        <h2 className={styles.title2}>Join Hackatweet today.</h2>
                        <button className={styles.button1}>Sign up</button>
                        <p>Already have an account ?</p>
                        <button className={styles.button2}>Sign in</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login;
