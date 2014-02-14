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

      /// Removes a node from the list.
      removeLast : function(index) {
        var current;
        if(this._head === null) {
          return;
        }
        else {
          /// If there is only one node, clear the list
          if(this._head.next === null) {
            this.clear();
          }
          else {
            current = this._head;
            for(var i = 1; i < this._length-1; i++) {
              if(current.next.next) {
                current = current.next;
              }
            }
            current.next = null;
            this._length--;
          }
        }
      },

      /// Removes all the nodes from the list
      clear : function() {
        this._head = null;
        this._length = 0;
      },

      /// Convert the list to an array
      toArray : function() {
        var arr = [];
        var current;
        if(this._head !== null) {
          current = this._head;
          arr.push(current);
          current = current.next;
          while(current) {
            arr.push(current);
            current = current.next;
          }
        }
        else {
          arr = [];
        }
        return arr;
      },

      /// Retrieve an item
      item: function(index) {

      }
    };

    $scope.linkedList = new LinkedList();

  });
