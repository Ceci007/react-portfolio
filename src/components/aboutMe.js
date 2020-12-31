import React from 'react';
import './aboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faBirthdayCake, faFlag, faComments } from '@fortawesome/free-solid-svg-icons';

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
                        Regarding the academy, I completed two years of Mechatronics Engineering degree 
                        at the National University of Asunción (FIUNA) until I realized that my true passion 
                        layed in frontend development.
                    </p>
                </div>
                <div class="sobre-mi__box">
                    <p>
                        As a self-taught student, I have 2 years of experience in HTML, CSS and JavaScript, 
                        I'm currently diving deeper into the React library in wich I have 1+ year of experience. 
                    </p>
                    <p>
                      I also spended about 8 months on Microverse Fulltime Program (from start to finish).
                    </p>
                </div>
            </div>
            <div class="horizontal-line">&nbsp;</div>
            <p>
                In my spare time I work on solving algorithms, reading about web design 
                trends, and also love to design layouts with CSS, take the dog for a walk 
                or do some sport. 
            </p>
            <div class="horizontal-line">&nbsp;</div>
            <ul class="sobre-mi__list">
              <li><FontAwesomeIcon icon={faBirthdayCake} className="icon-grey" /> Age: 27 years old.</li>
              <li><FontAwesomeIcon icon={faFlag} className="icon-grey" /> Nationality: Paraguayan | Italian.</li>
              <li><FontAwesomeIcon icon={faComments} className="icon-grey" /> Personality: Responsable, persistent, good comunication.</li>
            </ul>
          </div>
        </div>
      </section>
  );
}

export default AboutMe;