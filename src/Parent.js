import React from 'react';
import ChildComponent from './Child';

function ParentComponent() {
 
  const creature = {
    title: "Mental Peace",
    author: "Shiva",
    year: 2001
  };

  return (
    <div>
      <ChildComponent creature={creature} />
    </div>
  );
}

export default ParentComponent;
