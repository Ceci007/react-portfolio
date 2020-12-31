import React, { Component } from "react"
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate, faTh, faAward, faArchive } from '@fortawesome/free-solid-svg-icons'
import logo from "../images/logo-designcode.svg"
import "./reset.css"
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if(scrollTop > 50) {
      this.setState({ hasScrolled: true});
    } else {
      this.setState({ hasScrolled: false});
    }
  }

  render() {
    return( 
  <div className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}>
    <div className="HeaderGroup">
    <Link
      /*activeClass="navbar-nav__active"*/
      to="home"
      spy={true}
      smooth={true}
      offset={-70}
      duration= {500} ><img src={logo} width="30" /></Link>
      <Link
        to="about-me"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500} ><FontAwesomeIcon icon={faUserGraduate} className="nav-icon" /> About Me</Link>
       <Link
        to="skills"
        spy={true}
        smooth={true}
        offset={-100}
        duration= {500} ><FontAwesomeIcon icon={faTh} className="nav-icon" /> Skills</Link>
      <Link to="/workshops"><FontAwesomeIcon icon={faAward} className="nav-icon" /> credentials</Link>
      <Link to="/buy"><button><FontAwesomeIcon icon={faArchive} className="nav-icon" /> Portfolio</button></Link>
    </div>
  </div>)
  }
}

export default Header;
