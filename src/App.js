import './App.css';
import Add from "./components/Add";
import  React from "react";
import { connect } from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "./store/reducer.js"
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }
  componentDidMount(){
    this.props.addCounter(3);
  }
  render(){
    return (
        <div className="App">
          <header className="App-header">
            <Add />
          </header>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
