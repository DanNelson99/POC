import React from 'react';
import './Home.scss'

class Home extends React.Component {
 
  constructor(props, context) {
    super(props, context);

  }

render() {
  
  console.log("Home", this.props.container.containers);

     return (
      <div>
           <h1>Welcome to the Tornadoes Website!</h1>
      </div>
    );
  }
}

export default Home
