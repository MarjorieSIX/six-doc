function ready(event) {
  const myButton = document.getElementById('button-1');

  myButton.addEventListener('mousedown', function(elem) {
    myButton.classList.add('hold-mouse');
    const x = elem.pageX - 20;
    const y = elem.pageY - 90;
    myButton.innerHTML += `<div class="hexagon grow" style="left:${x}px;top:${y}px;"></div>`;
  });
  
  myButton.addEventListener('mouseout', function() {
    this.classList.remove('hold-mouse');
    const hexagon = document.querySelector('.hexagon');
    if (hexagon !== null) {
      hexagon.remove();
    }
  });
};
document.addEventListener("DOMContentLoaded", ready);
