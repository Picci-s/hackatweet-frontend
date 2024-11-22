import styles from "../styles/Home.module.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import Tweet from "./Tweet";
import { logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((State) => State.user.value);
  console.log("Firstname:", user.firstname);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftSection}>
        <div className={styles.logoTweeter}>
          <Link href="./hashtag" passHref>
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
            <h1 className={styles.titleTweet}>Home</h1>
          </div>
          <div className={styles.textTweet}>
            <Tweet />
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
