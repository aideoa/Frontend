import React, { useEffect, useState } from "react";
import useLatestNews from "../../../../Connection/LatestNewsapi";
import styles from "./InfoHeader.module.css";

const LatestNewsCard = () => {
  const { dataList, fetchData } = useLatestNews();
  const [latestNews, setLatestNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData("", 1, 6); // Fetch latest 6 news items
  }, []);

  useEffect(() => {
    if (dataList?.posts) {
      setLatestNews(dataList.posts.slice(0, visibleCount));
    }
  }, [dataList, visibleCount]);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleCount(6);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className={styles.latestNewsContainer}>
      <h2 className={styles.latestNewsTitle}>AIDEOA Latest News</h2>
      <div className={styles.newsGrid}>
        {latestNews.map((news, index) => (
          <div key={index} className={styles.newsCard}>
            {news.images?.length > 0 && (
              <img
                src={news.images[0].url}
                alt={news.title}
                className={styles.cardImage}
                loading="lazy"
              />
            )}
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{news.title}</h3>
              <p className={styles.cardDescription}>{news.description}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < 6 && (
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.loadMore} ${isLoading ? styles.loading : ""}`}
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className={styles.spinner}></span>
            ) : (
              <>
                <span className={styles.buttonText}>Explore More News</span>
                <span className={styles.buttonIcon}>↓</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default LatestNewsCard;
