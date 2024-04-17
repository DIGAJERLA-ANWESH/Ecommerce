import React from 'react';

function ChildComponent(props) {

  const { title, author, year } = props.creature;

  return (
    <div>
      <h2>Title: {title}</h2>
      <h2>Author: {author}</h2>
      <h2>Year: {year}</h2>
    </div>
  );
}

export default ChildComponent;
