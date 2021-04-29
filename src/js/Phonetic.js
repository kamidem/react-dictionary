import React from "react";
import '../css/Phonetic.css';

export default function Phonetic(props) {
  return (<div className='phonetic-block'>
    <span className="">{props.phonetic.text}</span>
    <a href={props.phonetic.audio} target='blank'>Listen</a>
  </div>)
}