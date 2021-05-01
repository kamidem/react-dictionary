import React from 'react';
import Synonyms from './Synonyms.js';
import '../css/Meaning.css';

export default function Meaning(props) {



  return <section className='meaning-block'>
    <h4>{props.meaning.partOfSpeech}</h4>
    {props.meaning.definitions.map(function (definition, index) {
      return <div className='meaning-each' key={index}>
        <p>
          <span>✦ {definition.definition}</span>
          <br />
          <strong>Example:</strong> {definition.example}
        </p>
        <Synonyms synonyms={definition.synonyms} />
      </div>
    })}
  </section >
}