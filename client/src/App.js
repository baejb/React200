import './App.css';
import { React } from 'react';
import LifecycleEx from './LifecycleEx008';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>css 적용하기</p>
      <LifecycleEx
       prop_value= 'FromApp.js'
      ></LifecycleEx>
    </div>
  );
}

export default App;
