import React from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import Error from "./error";
import PropTypes from "prop-types";
import logo from "./logo.jpg";
import { useState } from "react";
import { useEffect } from "react";


export default function News(props) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = `${capitalizeFirstLetter(
    props.category
  )} - NewsMonkey`;

  // Defining States
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(false)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async (pageNo) => {
    try {
      props.setProgress(0);
      setError(false);
      setLoader(true)
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=${props.pageSize}`;
      props.setProgress(50);
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.articles)
      setTotalResults(data.totalResults)
      setLoader(false)
      props.setProgress(100);
    } catch (e) {
      props.setProgress(0);
      setError(true);
      setLoader(false)
      console.log(new Error("Fail to fetch news"));
      props.setProgress(100);
    }
  }

  const handlePrevious = async () => {
    setPage(page - 1)
    let pageNO = page - 1;
    await updateNews(pageNO);
  };

  const handleNext = async () => {
    setPage(page + 1)
    let pageNO = page + 1;
    await updateNews(pageNO);
  };

  useEffect(() => {
    updateNews(1)
  }, [])

  return (
    <div className="container">
      <h2 className="text-center" style={{ marginTop: "70px" }}>
        News Monkey Top {capitalizeFirstLetter(props.category)}{" "}
        Headliness
      </h2>
      {error && <Error mode={props.mode} />}
      {loader && <Spinner mode={props.mode} />}
      <div className="row my-5">
        {articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              {error === false && loader === false ? (
                <NewsItem
                  title={element.title}
                  description={element.description}
                  mode={props.mode}
                  imageUrl={
                    element.urlToImage != null ? element.urlToImage : logo
                  }
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt.replace(/T|Z/g, " ")}
                  source={element.source.name}
                />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      {error === false ? (
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={page <= 1}
            className={`btn btn-${props.mode === "light" ? "dark" : "light"
              } bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "light" ? "dark" : "light"
              }`}
            onClick={handlePrevious}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            id="nextBTN"
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            className={`btn btn-${props.mode === "light" ? "dark" : "light"
              } bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "light" ? "dark" : "light"
              }`}
            onClick={handleNext}
          >
            Next &rarr;
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

// Default props
News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 15,
};

// Proptypes
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};



