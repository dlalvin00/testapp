let correctPlacements = 0;

document.querySelectorAll('.color').forEach(color => {
    color.addEventListener('dragstart', dragStart);
});

document.getElementById('color-target').addEventListener('dragover', dragOver);
document.getElementById('color-target').addEventListener('drop', drop);

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const colorId = event.dataTransfer.getData('text');
    const colorElement = document.getElementById(colorId);
    const targetColor = event.target.getAttribute('data-color');
    
    if (colorId.includes(targetColor)) {
        event.target.style.backgroundColor = colorElement.style.backgroundColor;
        correctPlacements += 1;
    }
    
    if (correctPlacements === 1) {
        setTimeout(checkWin, 1000);
    }
}

function checkWin() {
    window.location.href = '../pages/vitoria.html';
}

document.getElementById('back-btn').addEventListener('click', () => {
    window.location.href = '../GameSelection/index.html';
});
