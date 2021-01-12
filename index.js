function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  //   return response.json();
  // }) .then(function(json) {
  //   renderBooks(json)
  // });
    .then(func => func.json())
    .then(json => renderBooks(json))
}


function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
