
describe('parent', function () {

  var assert = require('assert');
  var parent = require('parent');
  var span = document.getElementById('three');

  it('should return the parent', function () {
    assert('two' === parent(span).id);
  });

  it('should filter by a selector', function () {
    assert('one' === parent(span, 'section').id);
  });

});