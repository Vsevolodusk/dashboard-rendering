import { Component } from "react";
import styles from "./style.module.css"

class HighReviews extends Component{

  
    render() {
        const {
          userData: { title, mark, text, authorName, authorImg, pros, cons },
        } = this.props;
    
        const highestMark = () => {
          if (mark > 8) {
            return (
              <article className={styles.wrapper}>
                <img className={`${styles.userImg} ${styles.itemAlign}`} src={authorImg} alt="Something " />
                <p className={`${styles.userName} ${styles.itemAlign}`}>{authorName}</p>
                <h2 className={`${styles.textTitle} ${styles.itemAlign}`}>{title}</h2>
                <p className={styles.articleText}>{text}</p>
                <p className={`${styles.userMark} ${styles.itemAlign}`}>{mark} / 10</p>
                <p className={styles.userPros}>{pros}</p>
                <p className={styles.userCons}>{cons}</p>
              </article>
            );
          }
        };
    
        return <>{highestMark()}</>;
      }  
    }

export default HighReviews