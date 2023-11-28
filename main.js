const bookForm = document.getElementById('book-form');
const addButton = document.getElementById('add-book');
const library = [];

addButton.addEventListener('click', function(){
  bookForm.style.display = 'Block';
})

bookForm.addEventListener('submit' ,function(event){
  event.preventDefault();
  const title = document.getElementById('Title').value;
  const author = document.getElementById('Author').value;
  const pages = document.getElementById('Pages').value;
  const read = document.getElementById('Read').value;
  const newBook = {
    title: title,
    author: author,
    pages: pages,
    read: read
  };
  library.push(newBook);

  document.getElementById('Title').value = '';
  document.getElementById('Author').value = '';
  document.getElementById('Pages').value = '';
  document.getElementById('Read').value = '';
})

const viewBooks = document.getElementById('view-book');
viewBooks.addEventListener('click', function(){
  displayBooks();
})

function displayBooks() {
  const booksContainer = document.getElementById('books-container');
  booksContainer.innerHTML = ''; // Clear previous content before displaying books

  library.forEach(function(book, index) {
    const bookDetails = document.createElement('div');
    bookDetails.classList.add('book-details');
    bookDetails.innerHTML = `
      <p><strong>Title:</strong> ${book.title}</p>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read}</p>
    `;
    booksContainer.appendChild(bookDetails);
  });
}
