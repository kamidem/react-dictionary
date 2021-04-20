import axios from 'axios';
import React, { useState } from 'react';


export default function Dictionary() {
  let [word, setWord] = useState('');

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${word} definition`);

    // documentation at https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
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