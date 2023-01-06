import React from "react";
import styles from "../../styles/Task.module.scss";

function Task({ text, done, click, keyprop, index }) {
  return (
    <div
      key={keyprop}
      index={index}
      className={styles.taskfield}
      onClick={click}
    >
      {done ? (
        <div className={styles.done}></div>
      ) : (
        <div className={styles.unDone}></div>
      )}

      {done ? <p className={styles.overLine}>{text}</p> : <p>{text}</p>}
    </div>
  );
}

export default Task;
