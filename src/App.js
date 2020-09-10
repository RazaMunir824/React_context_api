import React ,{Component} from 'react';
import './App.css';
import Parent from './Parent'


let value = 23;
class App extends Component{
  render(){
    return (
      <div className="App">
        Heloog
        <Parent value={value} />
      </div>
    );
  }
    
}

export default App;
