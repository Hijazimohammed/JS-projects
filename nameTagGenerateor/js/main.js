const tags = document.querySelector('.tags');
const input = document.getElementById('name');
const btn = document.getElementById('button');
const tagDelete = document.querySelectorAll('.tag');
const clearAll = document.getElementById('clear-all');

const generatedTags = (name) => {
  const div = document.createElement('div');
  div.className = 'tag';
  const h2 = document.createElement('h2');
  h2.className = 'tag-title';
  h2.innerText = 'Hello';
  const p = document.createElement('p');
  p.className = 'tag-subtitle';
  p.innerText = 'My name is';
  const h1 = document.createElement('h1');
  h1.className = 'tag-name';
  h1.innerText = name == undefined ? '' : name;
  const span = document.createElement('span');
  span.className = 'tag-delete';
  span.innerText = 'X';
  span.addEventListener('click', () => {
    div.remove();
  });
  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(h1);
  div.appendChild(span);
  tags.appendChild(div);
};

btn.addEventListener('click', function () {
  generatedTags(input.value);
});

clearAll.addEventListener('click', () => {
  tags.textContent = '';
});
