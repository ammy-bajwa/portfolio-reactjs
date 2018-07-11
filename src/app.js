import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/style.scss';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Services from './components/Services';
import Projects from './components/Projects';
import Features from './components/Features';
import Testmonials from './components/Testmonials';
import Price from './components/Price';
import Contact from './components/Contact';

class App extends React.Component {

  render() {
    return (
      <div>
        <Particles
          params={{
            "particles": {
              "number": {
                "value": window.screen.width > 500 ? 50 : 20,
                "density": {
                  "enable": true,
                  "value_area": window.screen.width > 500 ? 1700 : 2100
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 10,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 80,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 300,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 12,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onresize": {
                  "enable": true,
                  "density_auto": true,
                  "density_area": 400 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                }
                ,
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 800,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 800,
                  "size": 80,
                  "duration": 2,
                  "opacity": 0.8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 400,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }
          }
          style={{
            width: '100%'
          }}
        />
        <div id="mainContentDiv">
          <Navbar />
          <Slider />
          <Services />
          <Projects />
          <Features />
          <Testmonials />
          <Price />
          <Contact />
        </div>
      </div>
    );
  };

}


ReactDOM.render(<App />, document.getElementById('app'));
