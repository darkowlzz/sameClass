const data = require('sdk/self').data;
const panels = require('sdk/panel');
const widgets = require('sdk/widget');
const pageMod = require('sdk/page-mod');

let panel = panels.Panel({
  width: 212,
  height: 200,
  contentURL: data.url('panel.html'),
  contentScriptFile: data.url('panel.js')
});

let widget = widgets.Widget({
  label: 'showClass',
  id: 'show-class',
  contentURL: 'http://www.mozilla.org/favicon.ico',
  panel: panel
});

pageMod.PageMod({
  include: '*',
  contentStyleFile: data.url('page.css'),
  contentScriptFile: data.url('page.js'),
  onAttach: function(worker) {
    panel.port.on('show-class', function(name) {
      worker.port.emit('show-class-worker', name);
    })
  }
});
