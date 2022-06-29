
const items = document.querySelectorAll('.item'),
  controls = document.querySelectorAll('.control'),
  headerItems = document.querySelectorAll('.item-header'),
  descriptionItems = document.querySelectorAll('.item-description'),
  activeDelay = .76,
  interval = 5000;

let current = 0;

const slider = {
  init: () => {
    controls.forEach(control => control.addEventListener('click', (e) => { slider.clickedControl(e) }));
    controls[current].classList.add('active');
    items[current].classList.add('active');
  },
 
  clickedControl: (e) => { // Add active class to clicked control and corresponding slide
    slider.reset();

    const control = e.target,
      dataIndex = Number(control.dataset.index);

    control.classList.add('active');
    items.forEach((item, index) => { 
      if (index === dataIndex) { // Add active class to corresponding slide
        item.classList.add('active');
      }
    })
    current = dataIndex; // Update current slide
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);

  },
  reset: () => { // Remove active classes
    items.forEach(item => item.classList.remove('active'));
    controls.forEach(control => control.classList.remove('active'));
  },
  transitionDelay: (items) => { // Set incrementing css transition-delay for .item-header & .item-description, .vertical-part, b elements
    let seconds;
    
    items.forEach(item => {
      const children = item.childNodes; // .vertical-part(s)
      let count = 1,
        delay;
      
      item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

      })
  },
}

let intervalF = setInterval(slider.nextSlide, interval);
slider.init();

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