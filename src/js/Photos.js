import React from 'react';
import '../css/Photos.css';

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className='photos-top photos'>
        {props.photos.map(function (photo, index) {
          return (
            <a href={photo.src.original} target='_blank' rel="noreferrer" key={index}>
              <img src={photo.src.landscape} alt={props.word} className='img-fluid' />
            </a>
          )
        })}
      </section>);
  } else {
    return null
  }

}