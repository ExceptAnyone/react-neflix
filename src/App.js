import React from "react";
import Nav from "../src/components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./api/requests";

export default function App() {
  return (
    <div>
      <Nav /> 
      <Banner />
      <Row //FEEDBACK props 관련 강의 들을 필요
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
    </div>
  );
}
