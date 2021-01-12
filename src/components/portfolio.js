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
                it's a Dribbble clone<br />
                Made with Ruby and Ruby on Rails, with a SQL database and an S3 bucket to host images
              </p>
              <div className="img-box">
                <img src={require("../images/projects/dribbble-clone.png")} />
              </div>
              <div className="space">
                <a href="https://microverse-dribbble.herokuapp.com/" target="_blank">Live Demo</a>
                <a href="https://github.com/Ceci007/dribbble-clone" target="_blank">GitHub</a>
              </div>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h2>02</h2>
              <h3>E-Commerce</h3>
              <p>
                It's an E-Commerce site<br />
                Made with React, Redux, and Firebase to simulate an E-Commerce site with stripe integration
              </p>
              <div className="img-box">
                <img src={require("../images/projects/e-commerce.png")} />
              </div>
              <div className="space">
                <a href="https://crwn-live.herokuapp.com" target="_blank">Live Demo</a>
                <a href="https://github.com/Ceci007/crwn-clothing" target="_blank">GitHub</a>
              </div>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h2>03</h2>
              <h3>Done With It</h3>
              <p>
                It's a market place for mobile<br />
                Made with React-Native and Expo<br />
                Open the link, download the expo app, and scan the code
              </p>
              <div className="img-box">
                <img src={require("../images/projects/react-native.png")} />
              </div>
              <div className="space">
                <a href="https://expo.io/@cecipeke/DoneWithIt?release-channel=staging" target="_blank">Live Demo</a>
                <a href="https://github.com/Ceci007/done-with-it" target="_blank">GitHub</a>
              </div>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h2>04</h2>
              <h3>Twitter Clone</h3>
              <p>
                It's a Twitter clone<br />
                Made with a little vanilla JavaScript and CSS
              </p>
              <div className="img-box">
                <img src={require("../images/projects/twitter-clone.jpg")} />
              </div>
              <div className="space">
                <a href="https://ceci007.github.io/Twitter-Clone/" target="_blank">Live Demo</a>
                <a href="https://github.com/Ceci007/Twitter-Clone" target="_blank">GitHub</a>
              </div>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h2>05</h2>
              <h3>Custom</h3>
              <p>
                It's a theme.<br />
                a React.js theme styled from scratch
              </p>
              <div className="img-box">
                <img src={require("../images/projects/custom.jpg")} />
              </div>
              <div className="space">
                <a href="https://ceci007.github.io/custom/" target="_blank">Live Demo</a>
                <a href="https://github.com/Ceci007/custom" target="_blank">GitHub</a>
              </div>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h2>06</h2>
              <h3>Scoreboard</h3>
              <p>
                It's a videogame scoreboard<br />
                A scoreboard for a videogame made with React.js
              </p>
              <div className="img-box">
                <img src={require("../images/projects/scoreboard.png")} />
              </div>
              <div className="space">
                <a href="https://ceci007.github.io/scoreboard/" target="_blank">Live Demo</a>
                <a href="https://github.com/Ceci007/scoreboard" target="_blank">GitHub</a>
              </div>
            </div>
          </Tilt>
          <Tilt className="card" options={options} >
            <div className="content">
              <h2>07</h2>
              <h3>Trillo Site</h3>
              <p>
                It's a website template<br />
                just plain CSS, only to style the HTML
              </p>
              <div className="img-box">
                <img src={require("../images/projects/trillo.jpg")} />
              </div>
              <div className="space">
                <a href="https://ceci007.github.io/trillo-responsive/" target="_blank">Live Demo</a>
                <a href="https://github.com/Ceci007/trillo-responsive" target="_blank">GitHub</a>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;