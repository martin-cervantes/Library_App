let myLibrary = [];

function Book(author, title, numPages, beenRead) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.beenRead = beenRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookToLibrary(index) {
  if (confirm('Would you like to delete this book ??')) {
    myLibrary.splice(index, 1);
  }
}

myLibrary = [new Book('Julio Verne', 'Five weeks in a balloon', '288', true)];
addBookToLibrary(new Book('Julio Verne', 'Journey to the center of the earth', '368', false));
addBookToLibrary(new Book('Julio Verne', 'Around the world in 80 days', '400', false));
