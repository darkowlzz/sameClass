self.port.on('showw', function(name) {
  console.log("picked up!");
  console.log("classname: " + name);
  elems = document.getElementsByClassName(name);
  console.log("found " + elems.length);
  for (ele of elems) {
    ele.style.border = '4px solid red';
  }
});
