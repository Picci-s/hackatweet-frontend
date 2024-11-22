import styles from "../styles/Tweet.module.css";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

const backendURL = 'http://localhost:3000';

function Tweet() {
  // Import user token from redux store
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

  return (
    <div>
      <div>
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
        <p className={styles.caracters}>
          {tweetContent.length}/280 
          <button onClick={() => handleClick()} className={styles.button}>Tweet</button>
        </p>
      </div>
    </div>
  );
}

export default Tweet;