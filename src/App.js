import React, { Component } from 'react';
import TodayList from "./Components/TodayList";

class App extends Component {
  
  state = {
    tasks: [
      {
        title: "Eat a Banana",
        details: "Find a banana Eat it."
      },
      {
        title: "Tell the monkey to get off his monkey butt and do something",
        details: ""
      }
    ]
  }
  
  
  render() {
    return <TodayList tasks ={this.state.tasks} />;
  }
}

export default App;
