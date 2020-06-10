import React from "react"
import { Link } from "gatsby"

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
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br /> Design and Code <span>React apps</span></h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React.</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="logos">
          <img src={sketch} width="50" />
          <img src={figma} width="50" />
          <img src={studio} width="50" />
          <img src={framer} width="50" />
          <img src={react} width="50" />
          <img src={swift} width="50" />
        </div>
        <Wave />
      </div>
    </div>   
    <div className="Cards">
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
    <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
    {StaticData.cells.map((cell) => (<Cell key={cell.title} title={cell.title} image={cell.image} />))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
