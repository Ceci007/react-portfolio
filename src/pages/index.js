import React from "react"
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from "../components/layout"
import sketch from "../images/logo-sketch.png"
import figma from "../images/logo-figma.png"
import studio from "../images/logo-studio.png"
import framer from "../images/logo-framer.png"
import react from "../images/logo-react.png"
import swift from "../images/logo-swift.png"
import SEO from "../components/seo"
import Card from "../components/card"
import Section from "../components/section"
import Wave from "../components/wave"
import StaticData from "../../static-data.json"
import Cell from "../components/cell"
import styled from "styled-components"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
  margin-top: -100px;
  margin-bottom: 60px;
  position: relative;
  z-index: 50;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <ScrollAnimation animateIn="fadeInUp">
      <div className="Hero" id="home">
        <div className="HeroGroup">
          <h1>Frontend Engineer <br /><span>React Developer</span></h1>
          <p>Complete app development with the best tools and design systems</p>
          <Link
            to="about-me"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500} >
            Read more about me
          </Link>
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
    <ScrollAnimation animateIn="fadeInUp">
      <div className="Cards" id="about-me">
        <h2>11 courses, more coming</h2>
        <div className="CardGroup">
        <Card 
        title="Design System"
        text="10 sections"
        image={require("../images/wallpaper.jpg")} />
        <Card 
        title="React for Designers"
        text="12 sections"
        image={require("../images/wallpaper2.jpg")} />
        <Card 
        title="Sound Design"
        text="5 sections"
        image={require("../images/wallpaper3.jpg")} />
        <Card 
        title="ARKit 2"
        text="10 sections"
        image={require("../images/wallpaper4.jpg")} />
        </div>
      </div>
    </ScrollAnimation>
    <Section 
      image={require('../images/hero-2.jpg')}
      logo={require('../images/logo-react.png')}
      title="What is React?"
      text={`React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components. 
      It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page 
      or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of 
      additional libraries for state management and routing. Redux and React Router are respective examples of such libraries.`}
    />
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
    {StaticData.cells.map((cell) => (<Cell key={cell.title} title={cell.title} image={cell.image} />))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
