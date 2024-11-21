import styles from '../styles/SignIn.module.css';
import { useState } from 'react';

function SignIn() {

    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [signInFirstname, setSignInFirstname] = useState('');

    const handleSignIn = () => {
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: signInFirstname, username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    //dispatch(login({ firstname: setSignInFirstname, username: setSignInUsername, token: data.token }));
                    setSignInUsername('');
                    setSignInPassword('');
                    setSignInFirstname('');
                }
            });
    };

    return (
        <div className={styles.globalContainer}>
            <div className={styles.inputCard}>
                <h1 className={styles.title}> Connect your Hackatweet account </h1>
                <input
                placeholder='Username'
                    onChange={e => setSignInUsername(e.target.value)}
                    value={signInUsername}
                    className={styles.input}
                />
                <input
                    placeholder='Password'
                    onChange={e => setSignInPassword(e.target.value)}
                    value={signInPassword}
                    className={styles.input}
                />
                <button onClick={() => handleSignIn()} className={styles.button}> SignIn </button>
            </div>
        </div>
    );
}

export default SignIn;