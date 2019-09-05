import $ from 'jquery'

$(document).ready(() => {
  $('button').click(sendToAPI)
  // have fun!
  getTopWord(); 
});

function getTopWord() {
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

function appendTopWord(jsonReply) {
  $('.word-count').append(`
    <h4>Top-Word</h4>
    <br>
    <p>${Object.keys(jsonReply.word)}</p>
    <h4>Top-count</h4>
    <br>
    <p>${Object.values(jsonReply.word)}</p>`
  ) 
} 



function sendToAPI(event){
  event.preventDefault()
  var words = $('textarea').val()
  var data = { word: { value: words } }
  $.post('https://wordwatch-api.herokuapp.com/api/v1/words', data ,function(){
    alert('Added your essay to the Cloud')
  })
}