import React from 'react';
import Meaning from './Meaning.js';

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    return <div className='results-block'>
      <h2>{props.results.word}</h2>
      {props.results.meanings.map(function (meaning, index) {
        return <div key={index}>
          <Meaning meaning={meaning} />
        </div>;
        // meaning.definitions[0].definition
      })}
    </div>;
  } else {
    return null;
  }
}