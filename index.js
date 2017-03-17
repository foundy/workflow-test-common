'use strict';

module.exports = function (by) {
  var div = document.createElement('div');
  div.setAttribute('style', 'color:gray');
  div.textContent = 'Component : workflow-test-common (by ' + by + ')';

  return div;
};
