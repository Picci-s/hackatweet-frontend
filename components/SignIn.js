import styles from "../styles/SignIn.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/user";


import { useRouter } from "next/router";

function SignIn() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
   const router = useRouter();

  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  


  const handleSignIn = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: signInUsername, token: data.token }));
          setSignInUsername("");
          setSignInPassword("");
          router.push('/home')
      
        } else {
          alert("l'authentification à échouée !");
        }
      });
  };

  return (
    <div className={styles.globalContainer}>
      <div className={styles.inputCard}>
        <h1 className={styles.title}>Connect your Hackatweet account</h1>
        <input
          placeholder="Username"
          onChange={(e) => setSignInUsername(e.target.value)}
          value={signInUsername}
          className={styles.input}
        />
        <input
          placeholder="Password"
          onChange={(e) => setSignInPassword(e.target.value)}
          value={signInPassword}
          className={styles.input}
          type="password"
        />
      <button onClick={handleSignIn} className={styles.button}>
          Sign Up
        </button>

      </div>
    </div>
  );
}

export default SignIn;
