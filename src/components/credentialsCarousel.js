import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { credentialsData } from './../data/credentialsData';
import './credentialsCarousel.css';

class CredentialsCarousel extends Component {
    state = {
        credentials: credentialsData
    }

    render() { 
        const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 2,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 2,
            },
            tablet: {
              breakpoint: { max: 1024, min: 768 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 768, min: 0 },
              items: 1,
            },
        };

        const { credentials } = this.state;

        return (  
            <Carousel responsive={responsive} ssr={true}
            className="padding-box"
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={3000} infinite={true} transitionDuration={1000}
            swipeable={false}
            draggable={false}>
               {credentials.map(c => (
                <div key={c.id}>
                    <div className="img-box" >
                        <img src={c.img} />
                    </div>
                </div>
        ))}
            </Carousel>
        );
    }
}
 
export default CredentialsCarousel;