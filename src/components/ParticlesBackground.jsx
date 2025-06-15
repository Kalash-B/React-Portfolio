import React, { useState } from "react";
import ParticlesBg from "particles-bg";

const ParticlesBackground = () => {
  const [numParticles, setNumParticles] = useState(50);

  const handleClick = () => {
    // Add 5 new particles on every click
    setNumParticles((prev) => prev + 5);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "#0f172b",
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      <ParticlesBg
        type="custom"
        bg={true}
        config={{
          num: numParticles,
          rps: 1, // rotations per second
          radius: [1, 2],
          life: 3, // seconds before fading
          v: [0, 0], // static
          tha: 0,
          alpha: [0.7, 0],
          scale: [1, 1],
          position: "all",
          color: "#ffffff",
          cross: "dead",
          random: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
