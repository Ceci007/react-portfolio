import React from 'react';
import './aboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faBirthdayCake, faFlag, faComments, faLink } from '@fortawesome/free-solid-svg-icons';

function AboutMe(props) {
  return (
    <section class="sobre-mi" id="about-me">
        <div class="sobre-mi__content">
          <div class="sobre-mi__card">
            <div class="mi-top">
              <div class="ceci-img-box">
                <img src={require('../images/professional-picture.jpg')} alt="Cecilia Benitez" />
              </div>
              <span className="name">Cecilia Benítez</span>
              <FontAwesomeIcon icon={faHeartbeat} className="mi-top-i" />
            </div>
            <div class="sobre-mi__boxes">
                <div class="sobre-mi__box">
                    <p>
                      I completed two years of a degree in Mechatronics Engineering at 
                      the National University of Asunción (FIUNA) until I realized that 
                      my true passion lay in front-end development.
                    </p>
                </div>
                <div class="sobre-mi__box">
                    <p>
                      As a self-taught student, I have 2 years of experience in HTML, 
                      CSS, and JavaScript. I'm currently diving deeper into the React 
                      library in which I have 1+ year of experience.
                    </p>
                    <p>
                      I also spent about 8 months in the full-time Microverse Program.
                    </p>
                </div>
            </div>
            <div class="horizontal-line">&nbsp;</div>
            <p>
              In my spare time, I work on solving algorithms, and reading about web design trends. 
              I also love designing layouts with CSS, taking the dog for a walk and exercising. 
            </p>
            <div class="horizontal-line">&nbsp;</div>
            <ul class="sobre-mi__list">
              <li><FontAwesomeIcon icon={faBirthdayCake} className="icon-grey" /> 27 years old.</li>
              <li><FontAwesomeIcon icon={faFlag} className="icon-grey" /> Paraguayan | Italian.</li>
              <li><FontAwesomeIcon icon={faComments} className="icon-grey" /> Responsible, persistent, good communication..</li>
              <a className="link" href="https://docs.google.com/document/d/1bR2I-RvSnSyzanTq8LswUg3YQ32J-8tYZlZI5XDaAro/edit?usp=sharing" target="_blank"><li><FontAwesomeIcon icon={faLink} className="icon-grey" /> My Resume</li></a>
            </ul>
          </div>
        </div>
      </section>
  );
}

export default AboutMe;





