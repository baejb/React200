import React ,{ Component } from "react";

class Variable extends Component {
    constructor(props) {
        super(props);
        this.state = {} ;
        
    }
    componentDidMount() {
      var varName = 'react';
      console.log('varName1: ' +varName);
      var varName = '200';
      console.log('varName2: ', +varName);

      let letName= 'react';
      console.log('letName1 : '+letName);
      //let letName = '200'
      //Parsing error : letName은 이미 선언됨
      letName= 'react200';
      console.log('letName2:' +letName);

      const constName = 'react';
      console.log('constName : '+constName);
      //const constName = '200'
      //Parsing error : constName은 이미 선언됨 
      //constName = 'react200'
      // Uncaught TypeError: constant 변수는 재할당 안됨 
    }
    render() {
        
        return(
            <h2>This is ES6 STRING</h2>
        )
    }
}

export default Variable;

