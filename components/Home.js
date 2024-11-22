import styles from "../styles/Home.module.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import Tweet from "./Tweet";
import { logout } from "../reducers/user";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

const backendURL = 'http://localhost:3000';

function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  // Import user from redux store
  const user = useSelector((state) => state.user.value);
  // Set tweet state and setter
  const [tweetContent, setTweetContent] = useState("");
  const [postResult, setPostResult] = useState("");

  // Set handleClick function
  const handleClick = () => {
    fetch(`${backendURL}/tweets/creat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: user.token,
        message: tweetContent,
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if(data.result) {
        setPostResult("Fly little tweet, fly !");
        setTweetContent("");
      } else {
        setPostResult("Something get wrong")
      };
    });
  };

  // Set handleLogout function
  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftSection}>
        <div className={styles.logoTweeter}>
          <Link href="./home" passHref>
            <a className={styles.icons} aria-label="Navigate to home">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </Link>
        </div>
        <div className={styles.logout}>
          <div className={styles.userInfo}>
            <FontAwesomeIcon className={styles.faCircle} icon={faCircleUser} />
            <div>
              <p className={styles.firstname}>{user.firstname}</p>
              <span className={styles.username}>@{user.username}</span>
            </div>
          </div>
          <button className={styles.button} onClick={handleLogout}>
            logout
          </button>
        </div>
      </div>
      <div className={styles.centerSection}>
        <div className={styles.tweet}>
          <h1 className={styles.titleTweet}>Home</h1>
          <div className={styles.textTweet}>
            <div className={styles.inputContainer}>
              <input
                value={tweetContent}
                onChange={(e) => setTweetContent(e.target.value)}
                placeholder="What's up ?"
                maxLength={280}
                className={styles.input}
                type="text"
              />
            </div>
            <div className={styles.submit}>
              <div className={styles.caracters}>
                {tweetContent.length}/280 
                <button onClick={() => handleClick()} className={styles.sendButton}>Tweet</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lastTweetsContainer}>
          <div className={styles.contentLastTweet}>
            <LastTweets />
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <h2>Trends</h2>
        <Trends />
      </div>
    </div>
  );
}

export default Home;