import axios from 'axios';
import React, { useState } from 'react';
import Results from './Results.js';
import '../css/Dictionary.css';
import Photos from './Photos.js';


export default function Dictionary() {
  let [word, setWord] = useState('');
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    // console.log(response.data[0]);
    // console.log('word:', response.data[0].word);
    // console.log('definition:', response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    console.log(response);
    setPhotos(response.data.photos)
  }

  function search(event) {
    event.preventDefault();

    // documentation at https://dictionaryapi.dev/
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse)

    const pexelsApiKey = `563492ad6f91700001000001bf460057884a4703adc32c7b08cb207b`;
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    const headers = { headers: { "Authorization": `Bearer ${pexelsApiKey}` } };
    axios.get(pexelsApiUrl, headers).then(handlePexelResponse)
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return <div className='search-block' >
    <form onSubmit={search} >
      <input type='search' placeholder='search a word' onChange={handleWordChange} />
    </form>
    <Results results={results} />
    <Photos photos={photos} word={word} />
  </div>
}