// Clear the appended class.
function clear() {
  var elems = document.getElementsByClassName('same-Class');
  var ele = Array.prototype.slice.call(elems);
  for (var e of ele) {
    e.classList.toggle('same-Class');
  }
}

// Append a class to all the relevent elements.
self.port.on('show-class-worker', function(name) {
  clear();

  elems = document.getElementsByClassName(name);
  for (var ele of elems) {
    ele.classList.toggle('same-Class');
  }
});

// Hide the element border.
self.port.on('hide-class-worker', function() {
  clear();
});
