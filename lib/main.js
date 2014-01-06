const tabs = require('sdk/tabs');
const data = require('sdk/self').data;
const panels = require('sdk/panel');
const widgets = require('sdk/widget');
const pageMod = require('sdk/page-mod');

let panel = panels.Panel({
  width: 212,
  height: 200,
  contentURL: data.url('view.html'),
  contentScriptFile: data.url('view.js')
});

let widget = widgets.Widget({
  label: 'Text',
  id: 'text-entry',
  contentURL: 'http://www.mozilla.org/favicon.ico',
  panel: panel
});

pageMod.PageMod({
  include: '*',
  contentScriptFile: [data.url('jquery-1.4.2.min.js'),
                      data.url('now.js')],
  onAttach: function(worker) {
    console.log('attached!');
    panel.port.on('klicked', function(name) {
      console.log('showw ' + name);
      worker.port.emit('showw', name);
    })
  }
});
