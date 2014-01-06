var show = document.getElementById('do');
show.onclick = function() {
  var el = document.getElementById('classname');
  console.log("klicked");
  self.port.emit("klicked", el.value);
}
