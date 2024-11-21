import styles from '../styles/SignUp.module.css';
import { useState } from 'react';

function SignUp() {

    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpFirstname, setSignUpFirstname] = useState('');

    const handleSignUp = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    //dispatch(login({ firstname: setSignUpFirstname, username: setSignUpUsername, token: data.token }));
                    setSignUpUsername('');
                    setSignUpPassword('');
                    setSignUpFirstname('');
                }
            });
    };

    return (
        <div className={styles.globalContainer}>
            <div className={styles.inputCard}>
                <h1 className={styles.title}> Create your Hackatweet account </h1>
                <input
                    placeholder='Firstname'
                    onChange={e => setSignUpFirstname(e.target.value)}
                    value={signUpFirstname}
                    className={styles.input}
                />
                <input
                placeholder='Username'
                    onChange={e => setSignUpUsername(e.target.value)}
                    value={signUpUsername}
                    className={styles.input}
                />
                <input
                    placeholder='Password'
                    onChange={e => setSignUpPassword(e.target.value)}
                    value={signUpPassword}
                    className={styles.input}
                />
                <button onClick={() => handleSignUp()} className={styles.button}> SignUp </button>
            </div>
        </div>
    );
}

export default SignUp;