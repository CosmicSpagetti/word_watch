import $ from 'jquery'

$(document).ready(() => {
  // have fun!
  getTopWord(); 
});

var getTopWord = () => {
  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
  .then(response => {
    return response.json()
  })
  .then(jsonReply => {
    appendTopWord(jsonReply)
  })
  .catch(error => {
    console.log(error)
  })
}

var appendTopWord = (jsonReply) => {
  $('.word-count').append(`
    <h1>Top-Word</h1>
    <p>${Object.keys(jsonReply.word)}</p>
    <h1>Top-count</h1>
    <p>${Object.values(jsonReply.word)}</p>`
  ) 
} 