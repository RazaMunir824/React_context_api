

import React from 'react';
import Child from './Child'

const Parent = (props) => {
  return (
    <div>
      parent classs
     <Child value={props.value} />
    </div>
  );
}

export default Parent;