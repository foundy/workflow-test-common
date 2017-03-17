'use strict';

module.exports = function (by) {
  var span = document.createElement('span');
  span.setAttribute('style', 'color:ray');
  span.textContent = 'Component : workflow-test-common (by ' + by + ')';

  return span;
};
