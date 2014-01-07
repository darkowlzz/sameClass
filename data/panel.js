const showClass = 'show-class';
const clearClass = 'clear-class';

// Emit signal to show classes.
var show = document.getElementById('show');
show.onclick = function() {
  var el = document.getElementById('classname');
  self.port.emit(showClass, el.value);
}

// Emit signal to hide classes.
var clear = document.getElementById('clear');
clear.onclick = function() {
  self.port.emit(clearClass);
  document.getElementById('classname').value = "";
}
