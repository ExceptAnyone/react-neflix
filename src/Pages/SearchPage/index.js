import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";

export default function SearchPage() {
    const [searchResults, setSearchResults] = useState([]);

    const useQuery = () => {
        console.log(useLocation());
        return new URLSearchParams(useLocation().search);
      };
    
      let query = useQuery();
      const searchTerm = query.get("q");
      console.log("searchTerm", searchTerm);

    useEffect(() => {
        if(searchTerm) {
            fetchSearchMovie(searchTerm);
        }
    },[searchTerm])

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const request = await axios.get(
                `/search/multi?include_adult=false&query=${searchTerm}`
                )
                console.log('request', request);
                setSearchResults(request.data.results);
        } catch (error) {
            console.log(error);
        }
    }
  
  return <div></div>;
}
