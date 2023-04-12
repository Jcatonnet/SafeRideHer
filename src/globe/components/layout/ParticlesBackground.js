import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Particles.styles.css";

export const ParticlesBackground = () => {
  const particlesInit = async (body) => {
    console.log(body);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(body);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      className="background__particles"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: "#030828",
        },
        fpsLimit: 40,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
        particles: {
          number: {
            value: 196,
            density: {
              enable: true,
              value_area: 956.0000956000101,
            },
          },
          color: {
            value: "#dfe7fd",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.23900002390000255,
            random: true,
            anim: {
              enable: false,
              speed: 1.3715761023034418,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 15.933334926666838,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 5.647666303602407,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 462.0667128733383,
            color: "#ffffff",
            opacity: 1,
            width: 20,
          },
          move: {
            enable: true,
            speed: 3.1866669853333676,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 6333.477640418815,
              rotateY: 1200,
            },
          },
        },
      }}
    />
  );
};
