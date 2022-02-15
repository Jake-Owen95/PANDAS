import React, { Component } from 'react';
import Pandas from './components/pandas';
    class App extends Component {
      state = {
        pandas: []  
      }
      componentDidMount() {
        fetch('https://staging.mygrow.me/wp-json/mygrow/v1/get-pandas/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ pandas: data})
        })
        .catch(console.log)
      }
     
      render() {
        return (
          <Pandas pandas={this.state.pandas}/>
  
        );
      }
    }

    export default App;