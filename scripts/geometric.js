let correctPlacements = 0;

document.querySelectorAll('.draggable-shapes .shape').forEach(shape => {
    shape.addEventListener('dragstart', dragStart);
});

document.querySelectorAll('.targets .target').forEach(target => {
    target.addEventListener('dragover', dragOver);
    target.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const shapeId = event.dataTransfer.getData('text');
    const shape = document.getElementById(shapeId);
    const targetShape = event.target.getAttribute('data-shape');
    
    if (shapeId.includes(targetShape)) {
        event.target.appendChild(shape);
        correctPlacements += 1;   
    } 
    if (correctPlacements === 4){
        setTimeout(checkWin, 1000);
    }
}

function checkWin() {
    window.location.href = '../pages/vitoria.html';
}

document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = '../GameSelection/index.html';
});  
