import React from "react";
import { useParams } from "react-router-dom";

function YourVideos(props) {
  const params = useParams();
  return (
    <div>
      <h1>Your Videos {params?.id}</h1>
    </div>
  );
}

export default YourVideos;
