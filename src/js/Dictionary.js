import axios from 'axios';
import React, { useState } from 'react';


export default function Dictionary() {
  let [word, setWord] = useState('');

  function handleResponse() {

  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${word} definition`);

    let apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/hello';
    axios.get(apiUrl).then(handleResponse)
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return <div className='search-block' >
    <form onSubmit={search} >
      <input type='search' placeholder='search a word' onChange={handleWordChange} />
    </form>
  </div>
}