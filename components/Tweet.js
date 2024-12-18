import styles from "../styles/Tweet.module.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import { useEffect, useState } from "react";
import Moment from 'react-moment';

const backendURL = 'http://localhost:3000';

function Tweet(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(new Date ());
  })
  return (
  <div className={styles.tweetContainer}>
    <div className={styles.tweetHeaderContainer} >
        <Image 
            src="/twitter-egg.png"
            width={36}
            height={36}
            alt="twitter egg profile icon"
            className={styles.profileIcon}
        />
        <h4>{props.firstname}</h4>
        <span>@{props.username} - <Moment format='HH:mm'>{date}</Moment></span>
    </div>
    <div className={styles.messageContainer}>
        <p>{props.message}</p>
    </div>
    <FontAwesomeIcon icon={faHeart} />
  </div>
  );
}

export default Tweet;