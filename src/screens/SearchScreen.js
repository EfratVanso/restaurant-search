import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      console.log('hi there');
      
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "jerusalem",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  //searchApi('...') // BAD CODE!! without useEffect, it wil run again and again because the useState
  
  useEffect(() => { //run only when first rendered
    searchApi('pasta')
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>we have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
