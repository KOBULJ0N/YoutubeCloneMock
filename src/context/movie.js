import React, { createContext, useState } from "react";
import { data } from "../mock/data";

export const MovieContext = createContext();

const Movie = ({ children }) => {
  const [state, setState] = useState(data);
  return (
    <MovieContext.Provider value={[state, setState]}>
      {children}
    </MovieContext.Provider>
  );
};

export default Movie;
