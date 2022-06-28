let mini = document.querySelector('.mini');
let moveBy = 10;
window.addEventListener('load', () => {
    mini.style.position = 'absolute';
    mini.style.left = 0;
    mini.style.bottom = 0;
});
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            mini.style.left = parseInt(mini.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            mini.style.left = parseInt(mini.style.left) + moveBy + 'px';
            break;
        case 'ArrowDown':
            mini.style.top = parseInt(mini.style.top) + moveBy + 'px';
            break;
    }
});
let img = document.getElementById('walking');
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
    img.src = '6l1g5w.gif';
            break;
        case 'ArrowRight':
    img.src = '6l1i2a.gif';
            break;
          case 'ArrowUp':
    img.src = '6l39y0.gif';
            break;
    }
});