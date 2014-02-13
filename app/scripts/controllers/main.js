'use strict';

angular.module('datastructuresApp')
  .controller('MainCtrl', function ($scope) {

    var LinkedList = function() {
      /// The first node in the list or null if empty
      this._head = null;

      /// The last node in the list or null if empty
      this._tail = null;

      /// The number of items currently in the list
      this._length = 0;
    };

    LinkedList.prototype = {
      /// Adds the specified node to the list
      add : function(data) {
        var node = {
          next: null,
          data: data
        };
        var current;

        // If there are no nodes
        if(this._head === null) {
          this._head = node;
        }
        else {
          if(this._head.next === null) {
            this._head.next = node;
          }
          else {
            current = this._head.next;
            while(current.next) {
              current = current.next;
            }
            current.next = node;
          }
        }
        this._length++;
      },

      /// Removes a node from the list.
      remove : function(index) {
      },

      /// Removes all the nodes from the list
      clear : function() {
        this._head = null;
        this._length = 0;
      },

      /// List all the nodes from the list
      listNodes : function() {

      },

      /// Retrieve an item
      item: function(index) {

      }
    };

    $scope.linkedList = new LinkedList();

  });
