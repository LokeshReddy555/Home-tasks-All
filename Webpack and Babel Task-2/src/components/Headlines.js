import React, { useEffect, useState } from "react";

export default function Headlines() {
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=9f0177a4c7d94caa956c36347beaec33")
      .then((res) => res.json())
      .then((res) => {
        //  console.log(state);
        setNews(res.articles);
      }
      )
  }, [])
  return (
    <>
      <ul>
        {news.map((item, i) => {
          return <li key={i}>{item.title}</li>
        })}
      </ul>
    </>
  )
}