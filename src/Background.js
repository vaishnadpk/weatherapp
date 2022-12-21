import React from "react";
import video from "./static/D&N.mov";
import "./Background.css";

function Background() {
  return (
    <div className="background">
      <video className="videoedit" src={video} autoPlay loop muted />
    </div>
  );
}

export default Background;
