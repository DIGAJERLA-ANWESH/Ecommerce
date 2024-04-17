import React from 'react';
import ReactDOM from 'react-dom/client';

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <center>
    <button onClick={shoot}>Take the shot!</button>
    </center>

      );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);
export default Football;