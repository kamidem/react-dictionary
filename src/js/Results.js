import React from 'react';
import Meaning from './Meaning.js';
import Phonetic from './Phonetic.js';
import '../css/Results.css';

export default function Results(props) {

  if (props.results) {
    return <div className='results-block'>
      <section>
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return <div className="all-phonetics" key={index}>
            <Phonetic phonetic={phonetic} />
          </div>;
          // meaning.definitions[0].definition
        })}
      </section>
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