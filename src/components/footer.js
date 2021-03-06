import React from 'react'
import styled from "styled-components"
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';
import './footer.css';

const FooterMain = styled.div`
    margin: 0; 
    padding: 0;
    display: block;
    width: 100%;
    box-sizing: border-box;
`

const FooterGroup = styled.div`
    background: #f1f3f5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
    width: 100%;
    box-sizing: border-box;
`
const Text = styled.p`
    font-size: 24px;
    font-weight: 600; 
    color: #486791;
    max-width: 60%;
    margin: 0 auto;

    @media only screen and (max-width:  87.5em), only screen and (hover: none) {
        font-size: 20px;
        width: 80%;
    }
`

const FooterLink = styled.p`
    color: #5334f5;
    font-weight: 700;
    margin: 0;
    font-size: 20px;
    text-align: justify;
    cursor: pointer;
    text-decoration: none;
`

const Button = styled.button`
    font-size: 24px;
    display: flex;
    box-sizing: border-box;
    color: #fff;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    cursor: pointer;

    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
    }

    &:focus {
        outline: none;
    }
`

const LinkGroup = styled.div`
    width: 80%;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    align-items: center;
    justify-items: center;
    justify-content: center;

    @media only screen and (max-width:  87.5em), only screen and (hover: none) {
        grid-template-columns: repeat(1, 1fr);
    }

    a {
        color: #5334F5;
        font-size: 20px;
        font-weight: 500;
        margin: 5px 0;
        transition: 1s;
    }

    a:hover {
        color: black;
    }
`

const Copyright = styled.div`
    color: #486791;
    max-width: 60%;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;

    @media only screen and (max-width:  87.5em), only screen and (hover: none) {
        max-width: 80%;
        box-sizing: border-box;
    }

    @media only screen and (max-width:  56.25em), only screen and (hover: none) {
        max-width: 100%;
        box-sizing: border-box;
    }
`

const Footer = () => (
    <FooterMain>
        <FooterGroup>
        <Link
                to="home" 
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500} 
                className="text-center">
                <Button>
                    Home
                </Button>
            </Link>
            <LinkGroup>
                <a href="https://github.com/Ceci007" target="_blank"><FooterLink>GitHub</FooterLink></a>
                <a href="https://twitter.com/CeciDeveloper" target="_blank"><FooterLink>Twitter</FooterLink></a>
                <a href="https://www.linkedin.com/in/cecilia-benítez" target="_blank"><FooterLink>LinkedIn</FooterLink></a>
            </LinkGroup>
            <form name="contact" method="POST" data-netlify="true" className="contacto" id="contact">
                <h2 className="title">Contact me</h2>
                <p className="subtitle">Email me at cecibenitezca@gmail.com</p>
                <p>
                <input type="text" name="name" placeholder="Name" className="input-form"/>  
                </p>
                <p>
                <input type="email" name="email" placeholder="Email" className="input-form"/>
                </p>
                <p>
                <textarea name="message" rows="6" placeholder="Enter your message" className="input-form"></textarea>
                </p>
                <div className="submit-box">
                    <button type="submit">Send Email</button>
                </div>
            </form>
            <Copyright> © {new Date().getFullYear()}, for a better web</Copyright> 
        </FooterGroup>
    </FooterMain>
)

export default Footer;