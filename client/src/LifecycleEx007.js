import React ,{ Component } from "react";

class LifecycleEx007 extends Component {
    static getDerivedStateFromProps(props, state) {
         console.log('getDerivedFromProps Call:' +props.prop_value);
        return {tmp_state:props.prop_value};
      }
    constructor(props) {
        super(props);
        this.state = {} ;
        console.log('constructor Call');
    }
    componentDidMount() {
        console.log('componentDidMount Call');
        console.log('tmp_state:' +this.state.tmp_state);
    }
    render() {
        console.log('render Call');
        return(
            <h2>This is constructor function</h2>
        )
    }
}

export default LifecycleEx007;

