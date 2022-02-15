import React, { useState, useContext } from "react";
import { Category } from "./style";
import { data } from "../../../mock/data";
import { MovieContext } from "../../../context/movie";

const BodyTop = () => {
  const [state, setState] = useContext(MovieContext);
  const onChange = (e) => {
    const { value } = e.target;
    let res = data.filter(
      (val) => val.category.toLowerCase() === value.toLowerCase()
    );
    setState(res);
  };

  return (
    <Category>
      <Category.Btn onClick={onChange} value="Comedy">
        Comedy
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Game">
        Game
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Vlog">
        Vlog
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Music">
        Music
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Movie">
        Movie
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Course">
        Course
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Mixes">
        Mixes
      </Category.Btn>
      <Category.Btn onClick={onChange} value="React">
        React
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Javascript">
        Javascript
      </Category.Btn>
    </Category>
  );
};

export default BodyTop;
