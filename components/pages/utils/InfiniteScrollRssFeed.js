import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { useRef } from "react";

export function PaginatedList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstPageReceived, setIsFirstPageReceived] = useState(false);
  const [pageCount, setPageCount] = useState(1)

  const [newsItems, setNewsItems] = useState([]);

  const fetchData = async () => {
    try {
        const response = await fetch(`https://crypto.ro/feed?paged=${pageCount}`); // with pages, you get 10 items per view
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
      
        setNewsItems(prevNewsItems => [...prevNewsItems, ...news]);
        setPageCount(pageCount + 1)
        setIsLoading(false)
        !isFirstPageReceived && setIsFirstPageReceived(true);
          } catch (error) {
        console.error('Failed to fetch news feed:', error);
      }
  };

  const fetchNextPage = () => {
    fetchData();
    setIsLoading(true)
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return (          
    <li key={index}>
    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
    <p>{item.description}</p>
  </li>)
  };

  const ListEndLoader = () => {
    if (!isFirstPageReceived && isLoading) {
      // Show loader at the end of list when fetching next page data.
      return <ActivityIndicator size={'large'} />;
    }
  };

  if (isFirstPageReceived && isLoading) {
    // Show loader when fetching first page data.
    return <ActivityIndicator size={'small'} />;
  }

  return (
    <FlatList
      data={newsItems}
      renderItem={renderItem}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.8}
      ListFooterComponent={ListEndLoader} // Loader when loading next page.
    />
  );
}