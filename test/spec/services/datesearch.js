'use strict';

describe('Service: datesearch', function () {

  // load the service's module
  beforeEach(module('projectsApp'));

  // instantiate service
  var datesearch;
  beforeEach(inject(function (_datesearch_) {
    datesearch = _datesearch_;
  }));

  it('should do something', function () {
    expect(!!datesearch).toBe(true);
  });

});
