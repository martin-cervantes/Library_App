let myLibrary = [];

const form = document.getElementById('form_container');

function Book(author, title, numPages, beenRead) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.beenRead = beenRead;
}

function checkForm(author, title, numPages, beenRead) {
  if (author === '')
    alert('Author can\'t be blank');
  else if (title === '')
    alert('Title can\'t be blank');
  else if (numPages === '')
    alert('Number of pages can\'t be blank');
  else
    addBookToLibrary(new Book(author, title, numPages, beenRead));

}

function hideForm() {
  form.classList.add('hide');
}

function showForm() {
  form.classList.remove('hide');

  const inputs = [...document.getElementsByClassName("inputs")];

  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].type === 'text' || inputs[i].type === 'number') {
      inputs[i].value = '';
    } else {
      inputs[i].checked = false;
    }
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  hideForm();
}

function removeBookToLibrary(index) {
  if (confirm('Would you like to delete this book ??')) {
    myLibrary.splice(index, 1);
  }
}

myLibrary = [new Book('Julio Verne', 'Five weeks in a balloon', '288', true)];
addBookToLibrary(new Book('Julio Verne', 'Journey to the center of the earth', '368', false));
addBookToLibrary(new Book('Julio Verne', 'Around the world in 80 days', '400', false));
