document.addEventListener("DOMContentLoaded", function() {
  const colors = document.querySelectorAll('.color');
  const columns = document.querySelectorAll('.column');
  
  let score = 0;

  colors.forEach(color => {
      color.addEventListener('dragstart', dragStart);
      color.addEventListener('dragend', dragEnd);
  });

  columns.forEach(column => {
      column.addEventListener('dragover', dragOver);
      column.addEventListener('dragenter', dragEnter);
      column.addEventListener('dragleave', dragLeave);
      column.addEventListener('drop', drop);
  });

  let draggedColor = null;

  function dragStart() {
      draggedColor = this;
      setTimeout(() => (this.style.display = 'none'), 0);
  }

  function dragEnd() {
      setTimeout(() => (this.style.display = 'block'), 0);
  }

  function dragOver(e) {
      e.preventDefault();
  }

  function dragEnter(e) {
      e.preventDefault();
  }

  function dragLeave() {
      this.style.border = '2px solid #4da6ff';
  }

  function drop() {
      if (draggedColor) {
          const colorId = draggedColor.id;
          const columnId = this.id.split('-')[0]; // Get the color name from column's id

          if (colorId === columnId) {
              this.appendChild(draggedColor);
              this.style.backgroundColor = draggedColor.style.backgroundColor;
              score += 10;
              //document.getElementById("score").innerText = "Pontuação: " + score;

              // Check if score reaches 100 (for example)
              if (score == 40) {
                setTimeout(goVictory,2000)
                  
              }
          } else {
              const colorsContainer = document.getElementById("colors-container");
              colorsContainer.appendChild(draggedColor); // Retorna o elemento à sua posição original
              //this.style.backgroundColor = 'white'; // Reseta a cor de fundo se incorreto
          }
      }
  }
});

function goBack() {
  window.location.href = '../GameSelection/index.html';
}
function goVictory() {
  window.location.href = '../pages/vitoria.html';
}
