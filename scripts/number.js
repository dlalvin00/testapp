let draggedNumber = null;

document.addEventListener('DOMContentLoaded', function() {
  const numbers = document.querySelectorAll('.number');
  const targets = document.querySelectorAll('.target');

  numbers.forEach(number => {
    number.addEventListener('dragstart', dragStart);
    number.addEventListener('dragend', dragEnd);
  });

  targets.forEach(target => {
    target.addEventListener('dragover', dragOver);
    target.addEventListener('dragenter', dragEnter);
    target.addEventListener('dragleave', dragLeave);
    target.addEventListener('drop', drop);
  });
});

function dragStart() {
  draggedNumber = this;
  setTimeout(() => (this.style.opacity = '0.5'), 0);
}

function dragEnd() {
  setTimeout(() => (this.style.opacity = '1'), 0);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.style.backgroundColor = '#b3d9f2';
}

function dragLeave() {
  this.style.backgroundColor = '#ccc';
}

function drop() {
  if (draggedNumber) {
    this.appendChild(draggedNumber);
    this.style.backgroundColor = '#ccc';
    checkOrder();
  }
}

function checkOrder() {
  const targets = document.querySelectorAll('.target');
  let correctOrder = true;

  targets.forEach((target, index) => {
    const numberId = target.firstChild ? target.firstChild.id : null;
    if (numberId !== `number-${index + 1}`) {
      correctOrder = false;
      return;
    }
  });

  if (correctOrder) {
    setTimeout(() => {
      window.location.href = '../pages/vitoria.html'; 
    }, 2000);
  }
}

function goBack() {
  window.location.href = '../GameSelection/index.html';
}
