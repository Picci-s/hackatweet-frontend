import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Tweet from "./Tweet";
import styles from '../styles/LastTweets.module.css';

const backendURL = 'http://localhost:3000';

function LastTweet() {
    // Set tweets feed state and setter
    const[tweetFeeds, setTweetFeeds] = useState([]);

    // Import all tweets from BDD
    useEffect(() => {
        fetch(`${backendURL}/tweets/read`)
        .then(response => response.json())
        .then(data => {
            // Create each tweet
            let allTweets = data.tweetsData
            let tweets = allTweets.map((tweet, i) => {
                let timestamp = tweet.date;
                return(<Tweet id={i} firstname={tweet.user.firstname} username={tweet.user.username} timestamp={timestamp} message={tweet.message} />)
            })
            setTweetFeeds(tweets);
        })
    },[]);


    return (
        <div className={styles.lastTweetsContainer}>
            {tweetFeeds}
        </div>
      )
    }

export default LastTweet;