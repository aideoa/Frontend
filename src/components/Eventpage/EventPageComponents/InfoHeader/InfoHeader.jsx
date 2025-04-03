import React, { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import useLatestNews from "../../../../Connection/LatestNewsapi";
import styles from "./InfoHeader.module.css";

const LatestNewsCard = () => {
  const { dataList, fetchData } = useLatestNews();
  const [latestNews, setLatestNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true); // State for initial loading

  useEffect(() => {
    setIsInitialLoading(true);
    fetchData("", 1, 6).finally(() => setIsInitialLoading(false)); // Ensures loader hides after fetch
  }, []);

  useEffect(() => {
    if (dataList?.posts) {
      setLatestNews(dataList.posts.slice(0, visibleCount));
    }
  }, [dataList, visibleCount]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(6);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className={styles.latestNewsContainer}>
      <h2 className={styles.latestNewsTitle}>AIDEOA Latest News</h2>

      {/* Loader for Initial Data Fetch */}
      {isInitialLoading ? (
        <div className={styles.loaderContainer}>
          <ThreeCircles 
            height="80"
            width="80"
            color="#6e00fa"
            visible={true}
            ariaLabel="loading"
          />
        </div>
      ) : (
        <>
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
                  <ThreeCircles 
                    height="30"
                    width="30"
                    color="#6e00fa"
                    visible={true}
                    ariaLabel="loading"
                  />
                ) : (
                  <>
                    <span className={styles.buttonText}>Explore More News</span>
                    <span className={styles.buttonIcon}>↓</span>
                  </>
                )}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LatestNewsCard;
