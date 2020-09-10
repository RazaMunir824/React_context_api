

import React from 'react';
import ContextValue from './ContextValue'


function Child(){
	 let value  = React.useContext(ContextValue)
  return (
    <div>
     child classs {value[0]}
     <button onClick={() => {value[1](++value[0])} } >Update</button>
    </div>
  );
}

export default Child;