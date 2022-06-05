const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
const button = document.querySelector('.button');

let count = 16;

const createGrid = (rows, cols) => {
  mainContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  mainContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  let multy = rows * cols;

  while (multy > 0) {
    const innerDiv = document.createElement('div');
    innerDiv.className = 'inner-div';
    // innerDiv.innerText = 'div ';
    innerDiv.addEventListener('mouseover', () => {
      innerDiv.style.backgroundColor = `rgb(${randomcolor()},${randomcolor()},${randomcolor()})`;
    });
    innerDiv.addEventListener('mouseleave', () => {
      innerDiv.style.backgroundColor = 'transparent';
    });
    mainContainer.appendChild(innerDiv);
    multy--;
  }
};
const randomcolor = () => {
  return Math.floor(Math.random() * 255);
};

createGrid(count, count);

button.onclick = () => {
  const num = prompt('Enter number of grid');
  count = num;
  clear();
  createGrid(count, count);
};

const clear = () => {
  let grids = document.getElementsByClassName('inner-div');
  for (let index = 0; index < grids.length; index++) {
    grids[index].style.display = 'none';
  }
};

document.body.appendChild(mainContainer);
