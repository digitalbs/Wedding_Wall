'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('WeddingWallApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach three posts to the scope', function () {
    expect(scope.memories.length).toBe(3);
  });
});
