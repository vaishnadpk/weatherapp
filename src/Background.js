import React from "react";
import video from "./static/D&N.mp4";
import "./Background.css";

function Background() {
  return <video className="videoedit" src={video} autoPlay loop muted />;
}

export default Background;
