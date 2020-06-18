import React, { Component } from 'react';

class ContactUs extends Component {

    componentDidMount(){
        document.body.style.overflowY = 'hidden';
    }

    componentWillUnmount(){
        document.body.style.overflowY = 'visible';
    }

    render() {
        return (
            <div className='contact'>
                <h1> Contact Info </h1>
                <span>
                    <h2> RSVP by August 30<sup>th</sup> </h2>
                    <ul>
                        <li> Samantha Cooney </li>
                        <li> Phone Number: 585-635-9173 </li>
                    </ul>
                </span>
            </div>
        );
    }
}

export default ContactUs;