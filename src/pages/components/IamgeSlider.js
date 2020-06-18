import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import OldUs from '../../Imgs/OldUs.jpg';
import NewUs from '../../Imgs/NewUs.jpg';
import A1 from '../../Imgs/stuff/1.jpg'
import A2 from '../../Imgs/stuff/2.jpg'
import A3 from '../../Imgs/stuff/3.jpg'
import A4 from '../../Imgs/stuff/4.jpg'
import A5 from '../../Imgs/stuff/5.jpg'
import A6 from '../../Imgs/stuff/6.jpg'
import A7 from '../../Imgs/stuff/7.jpg'
import A8 from '../../Imgs/stuff/8.jpg'
import A9 from '../../Imgs/stuff/9.jpg'
import A10 from '../../Imgs/stuff/10.jpg'
import A11 from '../../Imgs/stuff/11.jpg'
import A12 from '../../Imgs/stuff/12.jpg'
import A13 from '../../Imgs/stuff/13.jpg'
import A14 from '../../Imgs/stuff/14.jpg'
import A15 from '../../Imgs/stuff/15.jpg'


class IamgeSlider extends Component {

    imgs = [A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15]

    style = {
          img: {
            height: '500px',
            objectFit: 'contain',
            backgroundColor: '#212529'
          }
    };

    render() {
        return (
            <>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={OldUs}
                        alt='First Slide'
                        style={this.style.img}
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={NewUs}
                        alt='Second Slide'
                        style={this.style.img}
                    />
                    {/*<Carousel.Caption>
                        <h3> Second Slide Label </h3>
                    </Carousel.Caption> */ }
                    </Carousel.Item>
                    {this.imgs.map(obj => (
                        <Carousel.Item>
                        <img 
                            className='d-block w-100'
                            src={obj}
                            alt='photos'
                            style={this.style.img}
                        />
                        </Carousel.Item>
                    ))}
                </Carousel> 
                </div>   
            </>
        );
    }
}

export default IamgeSlider;