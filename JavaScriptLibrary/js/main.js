let books = [
  {
    title: 'Head First JavaScript Programming',
    author: 'Elisabeth Robson ',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95HWFBxwf-xT_gXadn7UySAojSkn9OT4xGcdgwJ4q&usqp=CAE&s',
  },
  {
    title: 'A Smarter Way to Learn JavaScript',
    author: 'Mark Myers ',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ269AU4E5ZH2WH0nsDgKVzvcSshE6a2lnxpLqNv-6H&usqp=CAE&s',
  },
  {
    title: 'JavaScript and jQuery',
    author: 'Jon Duckett',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VxOyFF8waXp06ot6SNwR8E5F_0L93P0eLAcl8M7VfaIpH0pIcHX_&usqp=CAE&s',
  },
  {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlly7pMbaV7ld7gSSxjvkw7_wm9_t02lmpgkqtXXm9&usqp=CAE&s',
  },
  {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford ',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ269AU4E5ZH2WH0nsDgKVzvcSshE6a2lnxpLqNv-6H&usqp=CAE&s',
  },
  {
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan ',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83zGvadZSQfcNomBdxiU-PWC4sUFdSBy6WK8IflCe&usqp=CAE&s',
  },
];
const book = {
  title: '',
  author: '',
  image: '',
};
const container = document.getElementById('container');
const btnModal = document.getElementById('btn');
const modal = document.createElement('div');

showBooks = (bookss) => {
  for (let i = 0; i < bookss.length; i++) {
    const div = document.createElement('div');
    div.className = 'book';
    const divImg = document.createElement('div');
    divImg.className = 'div-img';
    const img = document.createElement('img');
    img.src = bookss[i].image;
    img.alt = bookss[i].title;
    divImg.appendChild(img);
    const innerDiv = document.createElement('div');
    innerDiv.className = 'book-details';
    const title = document.createElement('h1');
    title.textContent = bookss[i].title;
    innerDiv.appendChild(title);
    const author = document.createElement('p');
    author.textContent = bookss[i].author;
    innerDiv.appendChild(author);
    div.appendChild(divImg);
    div.appendChild(innerDiv);
    container.appendChild(div);
  }
};

const modalTitle = document.createElement('h1');
modalTitle.innerText = 'New Book';
const form = document.createElement('form');
form.action = '/';

const formControl = document.createElement('div');
formControl.className = 'form-control';

const formControl1 = document.createElement('div');
formControl1.className = 'form-control';

const formControl2 = document.createElement('div');
formControl2.className = 'form-control';

const titlelabel = document.createElement('label');
titlelabel.innerText = 'Title :';
const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.name = 'title';

const authorLabel = document.createElement('label');
authorLabel.innerText = 'Author :';
const authorInput = document.createElement('input');
authorInput.type = 'text';
authorInput.name = 'author';

const imageLabel = document.createElement('label');
imageLabel.innerText = 'Image :';
const imageInput = document.createElement('input');
imageInput.type = 'url';
imageInput.name = 'image';

const btnSubmit = document.createElement('button');
btnSubmit.innerText = 'Submit';
btnSubmit.type = 'submit';
btnSubmit.className = 'btn-submit';

const modalClose = document.createElement('h2');
modalClose.className = 'modal-close';
modalClose.innerText = 'X';
modal.classList.add('modal');

formControl.appendChild(titlelabel);
formControl.appendChild(titleInput);
form.appendChild(formControl);
formControl1.appendChild(authorLabel);
formControl1.appendChild(authorInput);
form.appendChild(formControl1);
formControl2.appendChild(imageLabel);
formControl2.appendChild(imageInput);
form.appendChild(formControl2);
form.appendChild(btnSubmit);
modal.appendChild(modalTitle);
modal.appendChild(modalClose);
modal.appendChild(form);

btnModal.addEventListener('click', () => {
  modal.classList.add('modal-active');
});
modalClose.addEventListener('click', () => {
  modal.classList.remove('modal-active');
});
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  if (titleInput.value == '' || authorInput.value == '' || imageInput.title) {
    alert('check fields');
  } else {
    book.title = titleInput.value;
    book.author = authorInput.value;
    book.image = imageInput.value;
    books.unshift(book);
    modal.classList.remove('modal-active');

    const div = document.createElement('div');
    div.className = 'book';
    const divImg = document.createElement('div');
    divImg.className = 'div-img';
    const img = document.createElement('img');
    img.src = book.image;
    img.alt = book.title;
    divImg.appendChild(img);
    const innerDiv = document.createElement('div');
    innerDiv.className = 'book-details';
    const title = document.createElement('h1');
    title.textContent = book.title;
    innerDiv.appendChild(title);
    const author = document.createElement('p');
    author.textContent = book.author;
    innerDiv.appendChild(author);
    div.appendChild(divImg);
    div.appendChild(innerDiv);
    container.appendChild(div);
    titleInput.value = '';
    authorInput.value = '';
    imageInput.value = '';
  }
});
showBooks(books);

document.body.appendChild(modal);
