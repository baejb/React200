import React ,{ Component } from "react";


class LifecycleEx006 extends Component {
    static getDerivedStateFromProps(props, state) {
       
         console.log('getDerivedFromProps Call:' +props.prop_value);
     
        return state;
      }
  
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

export default LifecycleEx006;

