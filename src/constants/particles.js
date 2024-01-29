

export const Collisions = {
  id: "tsparticles",
  options: {
    pauseOnBlur: false,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 6,
          speed: 3
        }
      }
    },
    particles: {
      color: {
        value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"]
      },
      links: {
        color: "random",
        distance: 40,
        enable: true,
        opacity: 0.8,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: "bounce",
        speed: 1
      },
      number: {
        value: 200
      },
      opacity: {
        animation: {
          enable: true,
          speed: 2,
          sync: false
        },
        value: { min: 0.3, max: 0.8 }
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 1
      }
    },
    polygon: {
      draw: {
        enable: true,
        stroke: {
          color: "#fff",
          opacity: 0.2,
          width: 1
        }
      },
      enable: true,
      move: {
        radius: 5
      },
      position: {
        x: 30,
        y: 10
      },
      inline: {
        arrangement: "equidistant"
      },
      scale: 1,
      type: "inline",
      url: "https://particles.js.org/images/google.svg"
    },
    background: {
      color: "#000000",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    }
  }
}

export const links =   {
  fpsLimit: 60,
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        sides: 5
      },
      image: {
        src: "https://cdn.matteobruni.it/images/particles/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      animation: {
        enable: false,
        speed: 1,
        minimumValue: 0.1,
        sync: false
      }
    },
    size: {
      value: 10,
      random: { enable: true, minimumValue: 5 },
      animation: {
        enable: false,
        speed: 40,
        minimumValue: 5,
        sync: false
      }
    },
    lineLinked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      collisions: true,
      enable: true,
      speed: 7,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: false,
        mode: "repulse",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10
        }
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  detectRetina: true,
  background: {
    color: "#0d47a1",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  }
}
