import React from "react";
import '../css/Phonetic.css';
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic(props) {
  return (<div className='phonetic-block'>
    <span className="">{props.phonetic.text}</span>
    <ReactAudioPlayer src={props.phonetic.audio} className='audio-player' controls />
    {/* <a href={props.phonetic.audio} target='blank'>Listen</a> */}
  </div>)
}