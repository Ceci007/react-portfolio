import React from "react"
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from "../components/layout"
import sketch from "../images/logo-sketch.png"
import figma from "../images/logo-figma.png"
import studio from "../images/logo-studio.png"
import framer from "../images/logo-framer.png"
import react from "../images/logo-react.png"
import SEO from "../components/seo"
import Section from "../components/section"
import Wave from "../components/wave"
import AboutMe from "../components/aboutMe";
import Skills from "../components/skills";
import CredentialsCarousel from "../components/credentialsCarousel";
import Portfolio from "../components/portfolio";
import styled from "styled-components"
import './index.css'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 30px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
  margin-top: -100px;
  margin-bottom: 60px;
  position: relative;
  z-index: 50;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <ScrollAnimation animateIn="fadeInUp">
      <div className="Hero" id="home">
        <div className="HeroGroup">
          <h1>Cecilia Benitez, Front-end Engineer <br /><span>React Developer</span></h1>
          <p>Complete app development, with the best tools and design systems</p><br />
          <br />
          <Link
            to="about-me" 
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            className="about-button" >
            Read more about me
          </Link>
          <br />
          <br />
          <br />
          <div className="icon-box">
            <a href="https://www.linkedin.com/in/cecilia-benítez" target="_blank" className="link">
              <div className="icon-individual-box">
                <img src={require("../images/social/linkedin.png")} />
              </div>
            </a>
            <a href="https://github.com/Ceci007" target="_blank" className="link">
              <div className="icon-individual-box">
                <img src={require("../images/social/github.png")} />
              </div>
            </a>
            <a href="https://twitter.com/CeciDeveloper" target="_blank" className="link">
              <div className="icon-individual-box">
                <img src={require("../images/social/twitter.png")} />
              </div>
            </a>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="logos">
            <img src={sketch} width="50" />
            <img src={figma} width="50" />
            <img src={studio} width="50" />
            <img src={framer} width="50" />
            <img src={react} width="50" />
          </div>
          <Wave />
        </div>
      </div>   
    </ScrollAnimation>
    <div id="portfolio">
      <Portfolio />
    </div>
    <ScrollAnimation animateIn="fadeInUp">
      <div className="Cards" id="about-me">
        <h2>About me</h2>
        <AboutMe />
      </div>
    </ScrollAnimation>
    <Section 
      image={require('../images/hero-2.jpg')}
      logo={require('../images/logo-react.png')}
      title="What is React?"
      text={`React (also known as React.js) is an open-source, front-end, JavaScript library for building user interfaces or UI components. 
      It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page 
      or mobile applications.`}
    />
    <div id="skills">
      <h2 className="skills-title">My Skills</h2>
      <ScrollAnimation animateIn="fadeInUp">
        <Skills />
      </ScrollAnimation>
    </div>
    <div id="credentials">
      <ScrollAnimation animateIn="fadeInUp" >
        <CredentialsCarousel />
      </ScrollAnimation>
    </div>
  </Layout>
)

export default IndexPage
