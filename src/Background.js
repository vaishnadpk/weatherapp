import React from "react";
import video from "./static/D&N.mov";
import "./Background.css";

function Background() {
  return <video className="videoedit" src={video} autoPlay loop muted />;
}

export default Background;
