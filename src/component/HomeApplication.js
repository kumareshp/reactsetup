import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeApplication extends Component{
constructor(args) {
super(args);
this.state = {

    };
}

render() {
    return(
        <div>
            <label>This is a HomeApplication component</label>
            <Link to="/nextpage">
        	<button className="w3-black">Move Further...</button>
        	</Link>
        </div>
    );
}
}