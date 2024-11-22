import { faJava, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import {useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Login.module.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Modal } from 'antd';
import Link from 'next/link';

function Login() {
    // Set modal states
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContentUp, setModalContentUp] = useState(false);

    // Function onClick for login et register buttons
    const handleSignUpClick = () => {
        setIsModalVisible(true);
        setModalContentUp(true);
    };
    const handleSignInClick = () => {
        setIsModalVisible(true);
        setModalContentUp(false);
    };

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
                        <button onClick={() => handleSignUpClick()} className={styles.button1}>Sign up</button>
                        <p>Already have an account ?</p>
                        <button onClick={() => handleSignInClick()} className={styles.button2}>Sign in</button>
                    </div>
                </div>
            </main>

            {isModalVisible && <div id='react-modals'>
                <Modal getContainer='#react-modals' className={styles.modal} visible={isModalVisible} closable={false} footer={null} >
                    {modalContentUp && <SignUp />}
                    {!modalContentUp && <SignIn />}
                </Modal>
            </div>}
        </div>
    );
}

export default Login;
