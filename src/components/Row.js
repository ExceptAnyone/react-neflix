import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import MovieModal from "./MovieModal";

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  //FEEDBACK props 내려받는 공부 필요
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results); //setMovies에 넣어주기
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <section>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow">{"<"}</span>
        </div>

        <div id={id} className="row__posters">
          {movies.map((movie) => {
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original/${
                //FEEDBACK 필요 url 수정?
                isLargeRow ? movie.poster_path : movie.backdrop_path
              } `}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />;
          })}
        </div>
        <div className="slider__arrow-right">
          <span className="arrow">{">"}</span> //slide 기능 생략
        </div>
      </div>

          {
            modalOpen && (
                <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
            )
          }

    </section>
  );
}
