import React from "react";
import { connect } from "react-redux";
import * as service from "../utils/fetchAPI";

import {mapStateToProps, mapDispatchToProps} from "../store/reducer";
class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: {}
        };
        this.submitClick = this.submitClick.bind(this);
        this.axiosSuccess = this.axiosSuccess.bind(this);
    }
    axiosSuccess(res){
        this.setState({response: res.data})
        console.log(this.state.response)
        this.props.getPosts(res.data.data);
    }
    submitClick(){
        this.props.addCounter(10);
        let input = {
            url: "https://reqres.in/api/users?page=2",
            callbackSuccess: this.axiosSuccess
        }
        if(process.REDUX_MOCK_ENABLED){
            
        }
        service.fetchGETAPI(input);
    }
    render() {
        return (
            <div className="App">
                <h1>Add Function</h1>
                <h4>{this.props.counter}</h4>
                <button onClick={this.submitClick}>Submit</button>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Add);