import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import NavBar from './pages/components/NavBar';
import HomePage from './pages/HomePage';
import OurStory from './pages/OurStory';
import WeddingParty from './pages/WeddingParty';
import ContactUs from './pages/ContactUs';
import Location from './pages/Location';

class App extends Component {

  style = {
    container: {
      padding: '0'
    },
  };

  render() {
    return ( 
      <Container fluid style={this.style.container}>
        <Router>
        <div className='header-name' >
          <span>Nate and Sam</span>
          <p> October 3rd <span class="dot"></span> 2020 </p>
        </div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Location' component={Location} />
          <Route exact path='/WeddingParty' component={WeddingParty} />
          <Route exact path='/ContactUs' component={ContactUs} />
        </Switch>
        </Router>
      </Container>
    )
  }
}

export default App;
