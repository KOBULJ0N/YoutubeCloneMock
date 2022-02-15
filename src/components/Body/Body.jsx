import React, { useContext } from "react";

import { Main } from "./style";
import BodyTop from "./BodyTop/BodyTop";
import { MovieContext } from "../../context/movie";
import { useNavigate, useParams } from "react-router-dom";

const Body = () => {
  const [state] = useContext(MovieContext);
  const navigate = useNavigate();
  return (
    <Main>
      <BodyTop />
      <Main.Content>
        {state.map((value) => {
          return (
            <Main.Channel
              key={value.id}
              onClick={() => navigate(`/home/:${value.id}`)}
            >
              <img src={value.img} alt="" width={295} height={186} />
              <Main.User>
                <img src={value.user} alt="" />
                <Main.ChannelTitle>{value.title}</Main.ChannelTitle>
              </Main.User>
              <Main.Description>{value.description}</Main.Description>
              <Main.Views>
                {value.id ** 2 * 2 + 1}k views -{" "}
                {Math.round((value.id * 100) / value.id ** 2)} days ago{" "}
              </Main.Views>
            </Main.Channel>
          );
        })}
      </Main.Content>
    </Main>
  );
};

export default Body;
