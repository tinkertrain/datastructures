'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('datastructuresApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  describe('Linked List', function() {

    it('should create a node list', function() {
      expect(scope.linkedList).toBeDefined();
    });

    it('should have a head', function() {
      expect(scope.linkedList._head).toBeDefined();
    });

    it('should have a tail', function() {
      expect(scope.linkedList._tail).toBeDefined();
    });

    // Add
    describe('Adding', function() {

      it('should have an add method', function() {
        expect(scope.linkedList.add).toBeDefined();
      });

      it('should increment the list length when adding', function() {
        // body...
        scope.linkedList.add('red');
        expect(scope.linkedList._length).toBe(1);
        scope.linkedList.add('blue');
        expect(scope.linkedList._length).toBe(2);
      });

      it('should add a node', function() {
        // Reset the list
        var red = {
          next: null,
          data: 'red'
        };
        var green = {
          next: null,
          data: 'green'
        };
        var blue = {
          next: green,
          data: 'blue'
        };
        var curr;

        scope.linkedList._head = null;
        scope.linkedList._length = 0;
        scope.linkedList.add('red');

        expect(scope.linkedList._length).toBe(1);
        expect(scope.linkedList._head).toEqual(red);

        scope.linkedList.add('blue');
        scope.linkedList.add('green');
        expect(scope.linkedList._head.next).toEqual(blue);
        curr = scope.linkedList._head.next;
        expect(curr.next).toEqual(green);
        expect(curr.next.next).toBeNull();
      });
    });

    // Remove
    describe('Removing', function() {

      it('should have a remove method', function() {
        expect(scope.linkedList.remove).toBeDefined();
      });
    });


    // Collection
    describe('Collection', function() {

      it('should have a clearList method', function() {
        expect(scope.linkedList.clearList).toBeDefined();
      });

      it('should have a length starting at 0', function() {
        expect(scope.linkedList._length).toBe(0);
      });

      it('should have a method to list the nodes', function() {
        expect(scope.linkedList.listNodes).toBeDefined();
      });

      it('should have a method to retrieve a node', function() {
        expect(scope.linkedList.item).toBeDefined();
      });
    });

  });

});
