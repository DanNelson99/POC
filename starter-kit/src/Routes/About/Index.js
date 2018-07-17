import React from 'react';
import Header from '../../components/header/index';
import './About.scss'

class About extends React.Component {
 
  constructor(props, context) {
    super(props, context);

  }
  
  render() {
    return (
      <div className="App">
        <Header/>
        <h1>Really Welcome to the Tornadoes Website!</h1>
      </div>)
    }
  }

export default About