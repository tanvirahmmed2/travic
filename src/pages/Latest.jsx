import React, { useEffect, useState } from "react";
import axios from "axios";

const Latest = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const URL = `https://newsdata.io/api/1/latest?apikey=pub_83ee697265fb4a17a6fe76a453a68445&q=bangla`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(URL);
        setArticles(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading news...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((news, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <h2 className="font-semibold text-lg">{news.title}</h2>
            <p className="text-sm text-gray-600">{news.description}</p>
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
