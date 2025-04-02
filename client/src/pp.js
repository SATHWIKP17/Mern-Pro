import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadAll } from '@tsparticles/all';
import './App.css';
function Aa() {
  const particlesInit = useCallback(async (engine) => {
    await loadAll(engine);
  }, []);

  return (
    <>
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "black" // White background
        },
        particles: {
          number: { value: 80 },
          color: "#ffffff", // Black particles
          size: 10,
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            width: 3,
          },
          move: {
            enable: true,
            speed: 10,
          },
        },
      }}
    />
  <div className="content">
        Welcome to My Particle World 🌌
      </div>
      </>
  );
}

export default Aa;
