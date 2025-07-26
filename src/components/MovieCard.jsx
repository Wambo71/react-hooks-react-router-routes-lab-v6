import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

export default function MovieCard() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${id}`)
      .then(res => res.json())
      .then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;
  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
        {movie.genres.map((g, i) => <span key={i}>{g}</span>)}
      </div>
    );
  }
      