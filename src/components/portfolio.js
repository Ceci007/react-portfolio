import React from 'react';
import Tilt from "../components/tilt";
import './portfolio.css';

function Portfolio(props) {
  const options = {
    scale: 1,
    speed: 400,
    max: 30,
    speed: 400,
    glare: true,
    "max-glare": 1,
  };

  return (
    <div className="container-box">
      <div className="container">
        <div className="cards">
        <Tilt className="card" options={options} >
            <div className="content">
              <h2>01</h2>
              <h3>Dribbble Clone</h3>
              <p>
                Made with Ruby and Ruby on Rails, with a SQL database and a S3 bucket to host images.
              </p>
              <div className="img-box">
                <img src={require("../images/projects/dribbble-clone.png")} />
              </div>
              <a href="https://microverse-dribbble.herokuapp.com/" target="_blank">Live Demo</a>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h2>02</h2>
              <h3>E-Commerce</h3>
              <p>
                Made with React, Redux and Firebase to simulate an E-Commerce site with stripe integration.
              </p>
              <div className="img-box">
                <img src={require("../images/projects/e-commerce.png")} />
              </div>
              <a href="https://crwn-live.herokuapp.com" target="_blank">Live Demo</a>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h2>03</h2>
              <h3>Mobile market sale</h3>
              <p>
                Made with React-Native and Expo.
                Open the link, download expo and scan the code.
              </p>
              <div className="img-box">
                <img src={require("../images/projects/react-native.png")} />
              </div>
              <a href="https://expo.io/@cecipeke/DoneWithIt?release-channel=staging" target="_blank">Live Demo</a>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h2>04</h2>
              <h3>Twitter Clone</h3>
              <p>
                Made with a little of vanilla JavaScript and CSS.
              </p>
              <div className="img-box">
                <img src={require("../images/projects/twitter-clone.jpg")} />
              </div>
              <a href="https://ceci007.github.io/Twitter-Clone/" target="_blank">Live Demo</a>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h2>05</h2>
              <h3>Custom</h3>
              <p>
                a React.js theme styled from scratch.
              </p>
              <div className="img-box">
                <img src={require("../images/projects/custom.jpg")} />
              </div>
              <a href="https://ceci007.github.io/custom/" target="_blank">Live Demo</a>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h2>06</h2>
              <h3>Scoreboard</h3>
              <p>
                A scoreboard for a videogame made with React.js.
              </p>
              <div className="img-box">
                <img src={require("../images/projects/scoreboard.png")} />
              </div>
              <a href="https://ceci007.github.io/scoreboard/" target="_blank">Live Demo</a>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h2>07</h2>
              <h3>Trillo Site</h3>
              <p>
                just plain CSS, only to style the HTML.
              </p>
              <div className="img-box">
                <img src={require("../images/projects/trillo.jpg")} />
              </div>
              <a href="https://ceci007.github.io/trillo-responsive/" target="_blank">Live Demo</a>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;