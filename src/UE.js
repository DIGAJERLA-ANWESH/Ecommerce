import React, { useState,useEffect } from 'react';

function App(){
  const [count, setCount ] = useState(0);
  useEffect(() => console.log(count),[count])
  return (
    <div>
      <center>
      <h2>
      <p> I Clicked {count} times</p>
      <button onClick = {()=> setCount(count +1)}>
        Click Me
      </button>
      </h2>

      </center>
      
    </div>
  );
}
export default App;
