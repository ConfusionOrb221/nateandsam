import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class NavBar extends Component {

    state = {
        story: true,
        location: false,
        weddingparty: false,
        contactus: false
    }

    style = {
        navbar: {
            padding: '0',
            fontSize: '1.65rem'
          },
        brand: {
            fontSize: '1.65rem'
          }
    };

    handleClick = e =>{
        e.preventDefault();
        console.log(e.target.attributes.href);
        this.props.history.push(e.target.attributes.href.value);
    }

    handleVisited = e =>{
        switch(e.target.attributes.href.value){
            case '/':
                this.setState({
                    story: true,
                    location: false,
                    weddingparty: false,
                    contactus: false
                });
                break
            case '/Location': 
                this.setState({
                    story: false,
                    location: true,
                    weddingparty: false,
                    contactus: false
                });
                break;
            case '/WeddingParty':
                this.setState({
                    story: false,
                    location: false,
                    weddingparty: true,
                    contactus: false
                });
                break;
            case '/ContactUs':
                this.setState({
                    story: false,
                    location: false,
                    weddingparty: false,
                    contactus: true
                });
                break;
            default:
                return;
        }
    }

    render() {
        return (
            <>
                <div className='nav-bar'>
                    <Link className={this.state.story ? 'visited' : null} onClick={this.handleVisited} to='/'> Our Story </Link>
                    <Link className={this.state.location ? 'visited' : null} onClick={this.handleVisited} to="/Location"> Location </Link>
                    <Link className={this.state.weddingparty ? 'visited' : null} onClick={this.handleVisited} to="/WeddingParty"> Wedding Party </Link>
                    <Link className={this.state.contactus ? 'visited' : null} onClick={this.handleVisited} to="/ContactUs"> Contact Us </Link>
                </div>         
            </>
        );
    }
}

export default withRouter(NavBar);