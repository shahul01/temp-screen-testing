import Header from "./components/Header";
import Catalogue from "./components/Catalogue";

import "./App.css";

import { useState } from "react";

function App() {
  const [MovieCatalogue, setMovieCatalogue] = useState([
    {
      id: 1,
      movieName: "Kung Fu Panda 1",
      director: ["Mark,Osborne 1"],
      casts: ["Jack Black 1", "Jackie Chan 1"],
      genre: ["Action 1", "Comedy 1"]
    },
    {
      id: 2,
      movieName: "Kung Fu Panda  2",
      director: ["Mark,Osborne 2"],
      casts: ["Jack Black 2"],
      genre: ["Action 2"]
    },
    {
      id: 3,
      movieName: "Kung Fu Panda  3",
      director: ["Mark,Osborne 3"],
      casts: ["Jackie Chan 3"],
      genre: ["Comedy 3"]
    }
  ]);
  //default movie selection
  const [SelectedMovie, setSelectedMovie] = useState([MovieCatalogue[0]]);

  //movie selection handler
  const onMovieSelect = (selectedMovieId) => {
    const selected = MovieCatalogue.filter(
      (movie) => movie.id === selectedMovieId
    );
    setSelectedMovie(selected);
  };
  return (
    <div className="App">
      <Header title={SelectedMovie[0].movieName}></Header>
      <Catalogue
        MovieCatalogue={MovieCatalogue}
        onSelect={onMovieSelect}
        selectedMovie={SelectedMovie}
      ></Catalogue>
    </div>
  );
}

export default App;
