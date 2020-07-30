let myLibrary = [];

let response = 1;

const form = document.getElementById('form_container');

const container = document.getElementById('container');

const books = document.getElementById('books_container');

function Book(author, title, numPages, beenRead) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.beenRead = beenRead;
}

Book.prototype.toggleBeenRead = function () {
  this.beenRead = !this.beenRead;
};

function toggleBeenRead(index) {
  myLibrary[index].toggleBeenRead();
}

function hideForm() {
  form.classList.add('hide');
  container.classList.remove('hide');
}

function showForm() {
  form.classList.remove('hide');
  container.classList.add('hide');

  const inputs = [...document.getElementsByClassName('inputs')];

  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].type === 'text' || inputs[i].type === 'number') {
      inputs[i].value = '';
    } else {
      inputs[i].checked = false;
    }
  }
}

function render() {
  let innerHTML = '';

  for (let i = 0; i < myLibrary.length; i += 1) {
    innerHTML += `<div class='book light_gray'><p class='info'><span class='label blue'>Author:</span> ${myLibrary[i].author}</p>`;
    innerHTML += `<i class='fas fa-trash-alt' onclick="removeBookToLibrary(${i})"></i>`;
    innerHTML += `<p class='info'><span class='label blue'>Title:</span> ${myLibrary[i].title}</p>`;
    innerHTML += `<p class='info'><span class='label blue'># Pages:</span> ${myLibrary[i].numPages}</p>`;
    innerHTML += "<p class='info'><span class='label blue'>Have you read this book?</span><input type='checkbox' ";

    if (myLibrary[i].beenRead) {
      innerHTML += 'checked ';
    }

    innerHTML += `onclick="toggleBeenRead(${i})" /></p></div>`;
  }

  books.innerHTML = innerHTML;
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  hideForm();

  render();
}

function removeBookToLibrary(index) {
  response = window.confirm('Would you like to delete this book ??');

  if (response) {
    myLibrary.splice(index, 1);
  }

  render();
}

function checkForm(author, title, numPages, beenRead) {
  if (author === '') {
    alert('Author can\'t be blank');
  } else if (title === '') {
    alert('Title can\'t be blank');
  } else if (numPages === '') {
    alert('Number of pages can\'t be blank');
  } else {
    addBookToLibrary(new Book(author, title, numPages, beenRead));
  }
}

/* testing */

myLibrary = [new Book('Julio Verne', 'Five weeks in a balloon', '288', true)];
if (response === 0) {
  checkForm();
  showForm();
  removeBookToLibrary(0);
  toggleBeenRead(2);
}
addBookToLibrary(new Book('Julio Verne', 'Journey to the center of the earth', '368', false));
addBookToLibrary(new Book('Julio Verne', 'Around the world in 80 days', '400', false));
