import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Software Engineer",
          "Machine Learning Enthusiast",
          "Web Developer",
          "Open Source Contributor",
          "Knowledge Seeker",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
