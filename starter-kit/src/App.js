import React, { Component } from "react";
import './App.scss';
import './styles.css';
import Header from './components/header/index'
import Home from './routes/home'
import { connect } from 'react-redux';
import { setConatainerData } from './actions/container';

class App extends Component{

  constructor(props, context) {
    super(props, context);
  }

    componentDidMount(){
      this.loadContainers();
    }

    loadContainers() {
      let containers = {
    
        containers: [{
          id: 123,
          borrowingGroup: 1,
          type: 1,
          status: 1,
          reasonType: 1,
          startDate: 1522590988,
          creatorId: 1,
          submissionDdate: 1525096588,
        },
        {
          id: 234,
          borrowingGroup: 1,
          type: 1,
          status: 1,
          reasonType: 2,
          startDate: 1522590988,
          creatorId: 1,
          submissionDdate: 1525096588,
        }]
      };
     this.props.dispatch(setConatainerData(containers));
    };

    render(){
      return(
          <div className="App">
          <Header/>
          <Home container={this.props.container}/>
          </div>
      );
    }
}

export default connect(state => state)(App);