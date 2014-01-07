self.port.on('show-class-worker', function(name) {
  elems = document.getElementsByClassName('same-Class-yolo');
  var e = Array.prototype.slice.call(elems);
  for (var el of e) {
    el.classList.toggle('same-Class-yolo');
  }

  elems = document.getElementsByClassName(name);
  for (var ele of elems) {
    ele.classList.toggle('same-Class-yolo');
  }
});
