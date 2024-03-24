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

  const fetchData = () => {
    setIsLoading(true);
    getDataFromApi(nextPageIdentifierRef.current).then((response) => {
      const { data: newData, nextPageIdentifier } = parseResponse(response);
      setData([...data, newData]);
      nextPageIdentifierRef.current = nextPageIdentifier;
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
    // get the data from api
    return Promise.resolve({ data: [], nextPageIdentifier: "page-1" });
  };
  const parseResponse = (response) => {
    let _data = response.data;
    let nextPageIdentifier = response.nextPageIdentifier;
    // parse response and return list and nextPage identifier.
    return {
      _data,
      nextPageIdentifier,
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