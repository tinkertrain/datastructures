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

      it('should check if the data exists and return true or false accordingly', function() {
        scope.linkedList.clear();
        scope.linkedList.add('red');
        scope.linkedList.add('blue');
        expect(scope.linkedList.remove('red')).toBeTruthy();
        expect(scope.linkedList.remove('yellow')).not.toBeTruthy();
      });

      it('should change the head if the node to be removed is the head', function() {
        var temp = {
          next: null,
          data: 'blue'
        };
        scope.linkedList.clear();
        scope.linkedList.add('red');
        scope.linkedList.add('blue');
        scope.linkedList.remove('red');
        expect(scope.linkedList._head).toEqual(temp);
      });

      it('should remove any given nove from the list', function() {
        var green = {
          next: null,
          data: 'green'
        };
        var blue = {
          next: green,
          data: 'blue'
        };
        var red = {
          next: blue,
          data: 'red'
        };
        var temp = {
          data: 'red',
          next: green
        };

        scope.linkedList.clear();
        scope.linkedList.add('red');
        scope.linkedList.add('blue');
        scope.linkedList.add('green');
        scope.linkedList.remove('blue');
        expect(scope.linkedList._head).toEqual(temp);
      });

      it('should have a removeLast method', function() {
        expect(scope.linkedList.removeLast).toBeDefined();
      });
      it('should clear the list if there is only one node', function() {
        var green = {
            next: null,
            data: 'green'
          };
        scope.linkedList._head = green;
        scope.linkedList.removeLast();
        expect(scope.linkedList._head).toBeNull();
        expect(scope.linkedList._length).toBe(0);
      });
      it('should decrease the length of the list', function() {
        scope.linkedList.clear();
        scope.linkedList.add('red');
        scope.linkedList.add('blue');
        scope.linkedList.removeLast();
        expect(scope.linkedList._length).toBe(1);
      });
      it('should remove the last node in the list', function() {
        var temp = {
          next: null,
          data: 'red'
        };
        scope.linkedList.clear();
        scope.linkedList.add('red');
        scope.linkedList.add('blue');
        scope.linkedList.removeLast();
        expect(scope.linkedList._head).toEqual(temp);
      });
    });


    // Collection
    describe('Collection', function() {

      it('should have a clear method', function() {
        expect(scope.linkedList.clear).toBeDefined();
      });

      it('should clear the list with the clear method', function() {
        scope.linkedList._head = null;
        scope.linkedList._length = 0;
        scope.linkedList.add('red');
        scope.linkedList.add('blue');
        scope.linkedList.add('green');
        scope.linkedList.clear();
        expect(scope.linkedList._head).toBeNull();
        expect(scope.linkedList._length).toBe(0);
      });

      it('should have a length starting at 0', function() {
        expect(scope.linkedList._length).toBe(0);
      });

      describe('should have a method to convert the list to an array', function() {
        it('should be defined', function() {
          expect(scope.linkedList.toArray).toBeDefined();
        });

        it('should return an array', function() {
          scope.linkedList.clear();
          var temp = scope.linkedList.toArray();
          var green = {
            next: null,
            data: 'green'
          };
          var blue = {
            next: green,
            data: 'blue'
          };
          var tempArr = [{
            next: blue,
            data: 'red'
          },
          {
            next: green,
            data: 'blue'
          },
          {
            next: null,
            data: 'green'
          }
          ];
          expect(temp).toEqual([]);

          scope.linkedList.add('red');
          scope.linkedList.add('blue');
          scope.linkedList.add('green');
          expect(scope.linkedList.toArray()).toEqual(tempArr);
        });
      });

      it('should have a method to retrieve a node', function() {
        expect(scope.linkedList.item).toBeDefined();
      });
    });

  });

});
