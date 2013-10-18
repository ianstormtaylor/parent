describe('previous-sibling', function () {

  var assert = require('assert')
    , previous = require('previous-sibling')
    , div = document.getElementById('three');

  it('should return the previous sibling', function () {
    assert('two' === previous(div).id);
  });

  it('should filter by a selector', function () {
    assert('one' === previous(div, 'span').id);
  });

  it('should return null on only child', function () {
    assert(null === previous(document.head));
  });

});