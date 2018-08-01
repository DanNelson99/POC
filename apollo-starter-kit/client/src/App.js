import React, { Component } from "react";
import './App.scss';
import './styles.css';
import Header from './components/header/index'
import Home from './routes/home'
import { connect } from 'react-redux';
import { setConatainerData } from './actions/container';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

class App extends Component{

  constructor(props, context) {
    super(props, context);
  }

    componentDidMount(){
      //this  is where you would put a service call and save too redux store
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
      //redux store containers
     this.props.dispatch(setConatainerData(containers));
    };

    render(){
      // Data from qraphql
     console.log("Data from qraphql",this.props.data);
      return(
          <div className="App">
          <Header/>
          <Home container={this.props.container}/>
          <button className="btn btn-primary">Boot Strap primary button</button>
          </div>
      );
    }
}

// define query in a constant
const allUsersQuery = gql`
  query {
    author(firstName: "Edmond", lastName: "Jones"){
      firstName
      lastName
    }
    getFortuneCookie
  }
`;

export default compose(graphql(allUsersQuery),connect(state => state))(App);