import React, { useState, useEffect } from 'react';

function NewsFeed() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    fetchNewsFeed();
  }, []);

  const fetchNewsFeed = async () => {
    try {
      const response = await fetch('https://crypto.ro/feed?paged=3'); // with pages, you get 10 items per view
      const data = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'text/xml');
      const items = xmlDoc.getElementsByTagName('item');
      const news = Array.from(items).map((item) => {
        return {
          title: item.getElementsByTagName('title')[0].textContent,
          link: item.getElementsByTagName('link')[0].textContent,
          comments: item.getElementsByTagName('comments')[0].textContent,
          pubDate: item.getElementsByTagName('pubDate')[0].textContent,
          creator: item.getElementsByTagName('dc:creator')[0].textContent,
          description: item.getElementsByTagName('description')[0].textContent,
          content: item.getElementsByTagName('content:encoded')[0].textContent,
          categories: Array.from(item.getElementsByTagName('category')).map((c) => c.textContent),
          // Add more fields as needed
        };
      });
      setNewsItems(news);
    } catch (error) {
      console.error('Failed to fetch news feed:', error);
    }
  };

  console.log(newsItems)

  return (
    <div>
      <h2>News Feed</h2>
      <ul>
        {newsItems.map((item, index) => (
         
          <li key={index}>
       
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsFeed;
