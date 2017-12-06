$(document).ready(function() {

  let authorbtn = $('#getAuthors')
  authorbtn.click(function() {
    $.get("https://tmartin-books-api.herokuapp.com/authors", function(data) {
      for (let i = 0; i < data.length; i++) {
        let p = $('<p></p>')
        p.text(data[i].first_name + " " + data[i].last_name)
        $('.results').append(p)
      }
    })
  })
  let bookbtn = $('#getBooks')
  bookbtn.click(function() {
    $.get("https://tmartin-books-api.herokuapp.com/details", function(data) {
      for (var i = 0; i < data.length; i++) {
        let p = $('<p></p>')
        p.text(data[i].title + " - " + data[i].author_first_name + " " + data[i].author_last_name)
        $('.results').append(p)
      }
    })
  })







});
