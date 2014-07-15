'use strict';

describe('Controller: FamilyCtrl', function () {

  // load the controller's module
  beforeEach(module('ngApp'));

  var FamilyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FamilyCtrl = $controller('FamilyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
