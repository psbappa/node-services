import React, { useEffect, useState } from "react";
import styles from './MyComponent.module.css'; // Assuming you have some styles for the NewsFeed component

export default function index() {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null)
  const API_KEY = "60e2c58de842463492e89e423cfb4f26";

  const getData = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    // let dt = jsonData.articles.slice(0,10);
    console.log(12345, jsonData.articles);
    setNewsData(dt)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div style={{ padding: "65px 30px 0px 30px" }}>
        <h2 className="text-center font-bold subpixel-antialiased">News Feed</h2>
        <nav className={styles.nav}>
            <div>
                <h1>Trendy News</h1>
            </div>
            <ul style={{display:"flex", gap:"11px"}}>
                <a style={{fontWeight:600, fontSize:"17px"}}>All News</a>
                <a style={{fontWeight:600, fontSize:"17px"}}>Trending</a>

            </ul>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} />
                <button onClick={getData}>Search</button>
            </div>
        </nav>
      </div>
    </>
  );
}
