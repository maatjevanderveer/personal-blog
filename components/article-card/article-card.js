import Image from "next/image";
import styles from "./article-card.module.css";
import Link from "next/link";

const ArticleCard = ({ imageSource, title, editorialSection }) => {
  return (
    <Link href="/posts/first-post" passHref>
      <a className={styles.container}>
        <Image src={imageSource} width="800" height="600" />
        <div className={styles.textContainer}>
          <span className={styles.editorialSection}>{editorialSection}</span>
          <h2>{title}</h2>
        </div>
      </a>
    </Link>
  );
};

export default ArticleCard;
