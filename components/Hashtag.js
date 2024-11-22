import styles from "../styles/Hashtag.module.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import { logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import Tweet, { tweet } from "./Tweet";

function Hashtag() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [hash, setHash] = useState([]);
  const [search, setSearch] = useState("");

  const user = useSelector((State) => State.user.value);

  const backendGet = "http://localhost:3000";

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  useEffect(() => {
    fetch(`${backendGet}/tweets/read`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log(data);
        }
      });
  }, []);

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
          <div>
            <h1 className={styles.titleTweet}>Hashtag</h1>
          </div>
          <div className={styles.textTweet}>
            <div className={styles.hashtag}>
              <input
                className={styles.input}
                type="text"
                value={hash}
                onChange={(e) => setSearch(e.target.value)}
              />
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

export default Hashtag;
