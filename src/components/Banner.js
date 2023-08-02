import React, { useEffect, useState } from "react";
import requests from "../api/requests";
import axios from "../api/axios";
import "./Banner.css";
export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      //FEEDBACK 필요
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  if(!isClicked) {
      return (
        <header
          className="banner"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`, //FEEDBACK 필요 이미지 url 수정?
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        >
          <div className="banner__contents">
            <h1 className="banner__title">
              {movie.title || movie.name || movie.original_name}
            </h1>
    
            <div className="banner__buttons">
              <button className="banner__button play" onClick={() => setIsClicked(true)}>Play</button>
              <button className="banner__button info">More Information</button>
            </div>
    
            <h1 className="banner__description">{truncate(movie.overview)}</h1>
          </div>
          <div className="banner--fadeBottom" />
        </header>
      );
    } else {
        return (
            <div> 
                clicked //FEEDBACK Styled Component 생략
            </div>
        )
    }

  }

