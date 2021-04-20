import axios from 'axios';
import React, { useState } from 'react';
import Results from './Results.js';


export default function Dictionary() {
  let [word, setWord] = useState('');
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    // console.log(response.data[0]);
    // console.log('word:', response.data[0].word);
    // console.log('definition:', response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
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
    <Results results={results} />
  </div>
}