import styles from "../styles/Tweet.module.css";

function Tweet() {
  const length = 280;
  const maxLength = 0;

  return (
    <div>
      <div>
        <input
          placeholder="What's up ?"
          maxLength={length}
          className={styles.input}
          type="text"
        />
      </div>
      <div className={styles.submit}>
        <p className={styles.caracters}>
          {maxLength}/{length} 
          <button className={styles.button}>Tweet</button>
        </p>
      </div>
    </div>
  );
}

export default Tweet;