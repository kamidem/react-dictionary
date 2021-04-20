import React from 'react';
import Synonyms from './Synonyms.js';

export default function Meaning(props) {
  console.log(props.meaning);

  return <div className='meaning-block'>
    <h4>{props.meaning.partOfSpeech}</h4>
    {props.meaning.definitions.map(function (definition, index) {
      return <div key={index}>
        <p>
          {definition.definition}
          <br />
          <em>{definition.example}</em>
          <Synonyms synonyms={definition.synonyms} />
        </p>
      </div>
    })}
  </div>
}