self.port.on('showw', function(name, prev) {
  elems = document.getElementsByClassName('same-Class-yolo');
  console.log("count: " + elems.length);
  console.log(JSON.stringify(elems));
  for (var i=0; i<elems.length; i++) {
    console.log('removing..');
    elems[i].classList.remove('same-Class-yolo');
  }
  elems = document.getElementsByClassName(name);
  console.log("found " + elems.length);
  for (var ele of elems) {
    ele.classList.toggle('same-Class-yolo');
  }
});
