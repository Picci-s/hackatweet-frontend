import styles from "../styles/Home.module.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import Tweet from "./Tweet";
import { logout } from "../reducers/user";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

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
          <p>
            <FontAwesomeIcon className={styles.faCircle} icon={faCircleUser} />
            John
            <br /> @JohnCena
          </p>

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
