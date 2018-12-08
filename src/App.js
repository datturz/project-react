import React, { Component } from 'react';
import Navbar from './komponen/Navbar/Navbar'
import Slider from './komponen/Slider/Slider'
import Konten from './komponen/Konten/Konten'
import Arival from './komponen/Arival/Arival'
import Footer from './komponen/Footer/Footer'
import Banner from './komponen/Banner/Banner'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Slider />
        <Konten />
        <Arival />
        <Banner />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
