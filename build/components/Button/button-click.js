/* from jquery to vanillaJS */
document.addEventListener("DOMContentLoaded", function(event) {
  
  console.log('doc ready');
  const myButton = document.getElementById('button-1');
  console.log(myButton);

  myButton.addEventListener('onmousedown', function() {
    console.log('on mouse down');
    this.classList.add('hold-mouse');
    console.log('event', event)
    var x = event.offsetX - 10;
    var y = event.offsetY - 10;
    myButton.append('<div class="hexagon grow" style="left:' + x + 'px;top:' + y + 'px;"></div>')
  });
  
  myButton.addEventListener('onmouseup', function() {
    console.log('on mouse up');
    this.classList.remove('hold-mouse');
  });
});


/*$(document).ready(function() {
  $('#button-1').mousedown(function() {
    $(this).addClass('hold-mouse')
    console.log('event', event)
    var x = event.offsetX - 10;
    var y = event.offsetY - 10;
    $('#button-1').append('<div class="hexagon grow" style="left:' + x + 'px;top:' + y + 'px;"></div>')
  })
  $('#button-1').mouseup(function() {
    $(this).removeClass('hold-mouse');
  })
})*/
