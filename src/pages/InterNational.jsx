import React, { useEffect, useState } from "react";
import { parse } from "rss-to-json";

const International = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadFeed = async () => {
      try {
        const rss = await parse("https://rss.nytimes.com/services/xml/rss/nyt/World.xml");
        setArticles(rss.items);
      } catch (err) {
        console.error("Error fetching RSS:", err);
      }
    };
    loadFeed();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Latest News</h1>
      {articles.map((item, i) => (
        <div key={i} className="border-b py-2">
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            {item.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default International;
