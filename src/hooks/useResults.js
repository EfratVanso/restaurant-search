import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default()=>{
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

  return [searchApi, results, errorMessage]
}