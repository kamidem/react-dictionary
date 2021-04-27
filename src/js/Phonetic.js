import React from "react";
import '../css/Phonetic.css';

export default function Phonetic(props) {
  return (<div className='phonetic-block'>
    <a href={props.phonetic.audio} target='blank'>Listen</a>
    <br />
    {props.phonetic.text}
  </div>)
}