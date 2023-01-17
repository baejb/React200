import React ,{ Component } from "react";


class LifecycleEx005 extends Component {
    constructor(props) {
        super(props);
        this.state = {} ;
        console.log('constructor Call');
    }
    render() {
        console.log('render Call');
        return(
            <h2>This is constructor function</h2>
        )
    }
}

export default LifecycleEx005;

