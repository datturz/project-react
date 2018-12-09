import React, { Component } from 'react'
import Footer from './komponen/Footer/Footer'
import Routes from './routes/Routes'
import Navbar from './komponen/Navbar/Navbar'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
