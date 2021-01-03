import React from 'react'
import styled from "styled-components"

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
    color: white;
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
        width: 80%;
        box-sizing: border-box;
    }
`

const Footer = () => (
    <FooterMain>
        <FooterGroup>
            <Text>“Prototype and build apps with React.js and React Native”</Text>
            <Button>Tweet</Button>
            <LinkGroup>
                <a href="https://github.com/Ceci007" target="_blank"><FooterLink>Github</FooterLink></a>
                <a href="https://twitter.com/CeciDeveloper" target="_blank"><FooterLink>Twitter</FooterLink></a>
                <a href="https://www.linkedin.com/in/cecilia-ben%C3%ADtez/" target="_blank"><FooterLink>Linkedin</FooterLink></a>
            </LinkGroup>
            <Copyright> © {new Date().getFullYear()}, for a better web</Copyright> 
        </FooterGroup>
    </FooterMain>
)

export default Footer;