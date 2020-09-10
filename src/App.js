import React ,{Component , useState} from 'react';
import './App.css';
import Parent from './Parent'
import ContextValue from './ContextValue'



function App(){
  let value=useState(48)
    return (
      <ContextValue.Provider value={value}>
        <div className="App">
          Heloog
          <Parent />
        </div>
      </ContextValue.Provider>  
    );
}
    
 

export default App;
