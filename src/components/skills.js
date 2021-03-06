import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import './skills.css';

function Skills(props) {
  return (
    <div className="box-sizing">
      <section class="skills" id="habilidades">
        <div class="skill-box">
            <div class="skill-card">
                <div class="skill-img-box">
                  <img src={require("../images/skills/html.jpg")} />
                </div>
                <div class="skill-card-body">
                    <h3 class="skills-heading">HTML</h3>
                </div>
            </div>

            <div class="skill-card">
                <div class="skill-img-box">
                  <img src={require("../images/skills/css.jpg")} />
                </div>
                <div class="skill-card-body">
                    <h3 class="skills-heading">CSS</h3>
                </div>
            </div>

            <div class="skill-card">
                <div class="skill-img-box">
                  <img src={require("../images/skills/javascript.png")} />
                </div>
                <div class="skill-card-body">
                    <h3 class="skills-heading">JavaScript</h3>
                </div>
            </div>

            <div class="skill-card">
                <div class="skill-img-box">
                  <img src={require("../images/skills/flexbox-cssgrid.png")} />
                </div>
                <div class="skill-card-body">
                    <h3 class="skills-heading">Flexbox and CSS grid</h3>
                </div>
            </div>

            <div class="skill-card">
                <div class="skill-img-box">
                  <img src={require("../images/skills/ecmascript.png")} />
                </div>
                <div class="skill-card-body">
                    <h3 class="skills-heading">ES6 onwards</h3>
                </div>
            </div>

            <div class="skill-card">
                <div class="skill-img-box">
                  <img src={require("../images/skills/sass.jpg")} />
                </div>
                <div class="skill-card-body">
                    <h3 class="skills-heading">Sass</h3>
                </div>
            </div>

            <div class="skill-card">
              <div class="skill-img-box">
                <img src={require("../images/skills/react.jpg")} />
              </div>
              <div class="skill-card-body">
                  <h3 class="skills-heading">React</h3>
              </div>
          </div>

          <div class="skill-card">
            <div class="skill-img-box">
              <img src={require("../images/skills/ruby.png")} />
            </div>
            <div class="skill-card-body">
                <h3 class="skills-heading">Ruby</h3>
            </div>
          </div> 

          <div class="skill-card">
            <div class="skill-img-box">
              <img src={require("../images/skills/ruby-on-rails.png")} />
            </div>
            <div class="skill-card-body">
                <h3 class="skills-heading">Ruby on Rails</h3>
            </div>
          </div> 
        </div>
        </section>
        
        <div class="idiomas">
            <div class="container-idioma">
              <div class="progress-container">
                <svg class="progressbar" viewBox="0 0 64 64">
                  <defs>
                    <clipPath id="progress__mask">
                      <path d="M29 63.35h-.15a31.55 31.55 0 0 1-28.2-28.2 1.5 1.5 0 0 1 3-.3 28.56 28.56 0 0 0 25.5 25.51 1.5 1.5 0 0 1-.15 3zM35 63.35a1.5 1.5 0 0 1-.15-3 28.56 28.56 0 0 0 25.52-25.5 1.5 1.5 0 0 1 3 .3 31.55 31.55 0 0 1-28.2 28.19zM2.14 30.5H2a1.5 1.5 0 0 1-1.35-1.65A31.56 31.56 0 0 1 28.85.66a1.5 1.5 0 0 1 .3 3A28.56 28.56 0 0 0 3.63 29.15a1.5 1.5 0 0 1-1.49 1.35zM61.86 30.5a1.5 1.5 0 0 1-1.49-1.35A28.56 28.56 0 0 0 34.85 3.64a1.5 1.5 0 1 1 .3-3 31.56 31.56 0 0 1 28.2 28.19A1.5 1.5 0 0 1 62 30.49z"/>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#progress__mask)">
                    <circle class="progressbar__track" cx="50%" cy="50%" r="30px"></circle>
                    <circle class="progressbar__thumb-1 progressbar__thumb--track-1" cx="50%" cy="50%" r="30px"></circle>
                    <circle class="progressbar__thumb-1 progressbar__thumb--track-2" cx="50%" cy="50%" r="30px"></circle>
                    <circle class="progressbar__thumb-1 progressbar__thumb--track-3" cx="50%" cy="50%" r="30px"></circle>
                  </g>
                </svg>
                <div class="icon-content">
                    <FontAwesomeIcon icon={faRocket} />
                </div>
                <div class="progress-content">
                  <div class="progress__value">100</div>
                  <div class="progress__text">Spanish</div>
                </div>
              </div>
            </div>

            <div class="container-idioma">
                <div class="progress-container">
                  <svg class="progressbar" viewBox="0 0 64 64">
                    <defs>
                      <clipPath id="progress__mask">
                        <path d="M29 63.35h-.15a31.55 31.55 0 0 1-28.2-28.2 1.5 1.5 0 0 1 3-.3 28.56 28.56 0 0 0 25.5 25.51 1.5 1.5 0 0 1-.15 3zM35 63.35a1.5 1.5 0 0 1-.15-3 28.56 28.56 0 0 0 25.52-25.5 1.5 1.5 0 0 1 3 .3 31.55 31.55 0 0 1-28.2 28.19zM2.14 30.5H2a1.5 1.5 0 0 1-1.35-1.65A31.56 31.56 0 0 1 28.85.66a1.5 1.5 0 0 1 .3 3A28.56 28.56 0 0 0 3.63 29.15a1.5 1.5 0 0 1-1.49 1.35zM61.86 30.5a1.5 1.5 0 0 1-1.49-1.35A28.56 28.56 0 0 0 34.85 3.64a1.5 1.5 0 1 1 .3-3 31.56 31.56 0 0 1 28.2 28.19A1.5 1.5 0 0 1 62 30.49z"/>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#progress__mask)">
                      <circle class="progressbar__track" cx="50%" cy="50%" r="30px"></circle>
                      <circle class="progressbar__thumb-2 progressbar__thumb--track-1" cx="50%" cy="50%" r="30px"></circle>
                      <circle class="progressbar__thumb-2 progressbar__thumb--track-2" cx="50%" cy="50%" r="30px"></circle>
                      <circle class="progressbar__thumb-2 progressbar__thumb--track-3" cx="50%" cy="50%" r="30px"></circle>
                    </g>
                  </svg>
                  <div class="icon-content">
                      <FontAwesomeIcon icon={faRocket} />
                  </div>
                  <div class="progress-content">
                    <div class="progress__value">90</div>
                    <div class="progress__text">English</div>
                  </div>
                </div>
              </div>

              <div class="container-idioma">
                  <div class="progress-container">
                    <svg class="progressbar" viewBox="0 0 64 64">
                      <defs>
                        <clipPath id="progress__mask">
                          <path d="M29 63.35h-.15a31.55 31.55 0 0 1-28.2-28.2 1.5 1.5 0 0 1 3-.3 28.56 28.56 0 0 0 25.5 25.51 1.5 1.5 0 0 1-.15 3zM35 63.35a1.5 1.5 0 0 1-.15-3 28.56 28.56 0 0 0 25.52-25.5 1.5 1.5 0 0 1 3 .3 31.55 31.55 0 0 1-28.2 28.19zM2.14 30.5H2a1.5 1.5 0 0 1-1.35-1.65A31.56 31.56 0 0 1 28.85.66a1.5 1.5 0 0 1 .3 3A28.56 28.56 0 0 0 3.63 29.15a1.5 1.5 0 0 1-1.49 1.35zM61.86 30.5a1.5 1.5 0 0 1-1.49-1.35A28.56 28.56 0 0 0 34.85 3.64a1.5 1.5 0 1 1 .3-3 31.56 31.56 0 0 1 28.2 28.19A1.5 1.5 0 0 1 62 30.49z"/>
                        </clipPath>
                      </defs>
                      <g clip-path="url(#progress__mask)">
                        <circle class="progressbar__track" cx="50%" cy="50%" r="30px"></circle>
                        <circle class="progressbar__thumb-3 progressbar__thumb--track-1" cx="50%" cy="50%" r="30px"></circle>
                        <circle class="progressbar__thumb-3 progressbar__thumb--track-2" cx="50%" cy="50%" r="30px"></circle>
                        <circle class="progressbar__thumb-3 progressbar__thumb--track-3" cx="50%" cy="50%" r="30px"></circle> 
                      </g>
                    </svg>
                    <div class="icon-content">
                        <FontAwesomeIcon icon={faRocket} />
                    </div>
                    <div class="progress-content">
                      <div class="progress__value">52</div>
                      <div class="progress__text">Guarani</div>
                    </div>
                  </div>
              </div>
          </div>
    </div>
  );
}

export default Skills;