import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { useRef } from "react";

export function PaginatedList(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const nextPageIdentifierRef = useRef();
  const [isFirstPageReceived, setIsFirstPageReceived] = useState(false);
  const [pageCount, setPageCount] = useState(1)

  const fetchData = () => {
    setIsLoading(true);
    getDataFromApi().then((response) => {
      const { data: newData } = parseResponse(response);
      setData([...data, newData]);

      setIsLoading(false);
      !isFirstPageReceived && setIsFirstPageReceived(true);
    });
  };

  const fetchNextPage = () => {
    if (nextPageIdentifierRef.current == null) {
      // End of data.
      return;
    }
    fetchData();
  };

  const getDataFromApi = () => {
    fetch(`https://crypto.ro/feed?paged=${pageCount}`)
    return Promise.resolve({ data: [] });
  };

  const parseResponse = (response) => {
    let _data = response
    setPageCount(pageCount + 1)

    return {
      _data,
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return <Text>{item}</Text>;
  };

  const ListEndLoader = () => {
    if (!isFirstPageReceived && isLoading) {
      // Show loader at the end of list when fetching next page data.
      return <ActivityIndicator size={'large'} />;
    }
  };

  if (!isFirstPageReceived && isLoading) {
    // Show loader when fetching first page data.
    return <ActivityIndicator size={'small'} />;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.8}
      ListFooterComponent={ListEndLoader} // Loader when loading next page.
    />
  );
}