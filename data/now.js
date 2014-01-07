self.port.on('showw', function(name) {
  elems = document.getElementsByClassName('same-Class-yolo');
  var e = Array.prototype.slice.call(elems);
  for (var el of e) {
    console.log('removing..');
    el.classList.toggle('same-Class-yolo');
  }

  elems = document.getElementsByClassName(name);
  console.log("found " + elems.length);
  for (var ele of elems) {
    ele.classList.toggle('same-Class-yolo');
  }
});
