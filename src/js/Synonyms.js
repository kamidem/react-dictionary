import React from 'react';
import '../css/Synonyms.css';

export default function Synonyms(props) {
  if (props.synonyms) {
    return <ul> Synonims: {props.synonyms.map(function (synonym, index) {
      return <li key={index}>
        {synonym}
      </li>
    })}
    </ul>
  } else {
    return null
  }

}