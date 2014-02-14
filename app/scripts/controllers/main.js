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
      remove : function(data) {
        var current;
        var previous;
        var found = false;

        if(this._length > 0) {
          // If there is only one node and it is to be deleted
          if(this._head.data === data && this._length === 1) {
            this.clear();
            return true;
          }
          else {
            // if removing the head but there are more nodes we need to change the head pointer
            if(this._head.next !== null && this._head.data === data) {
              this._head = this._head.next;
              return true;
            }
            current = this._head;
            while(current) {
              if(current.data === data) {
                found = true;
                break;
              }
              previous = current;
              current = current.next;
            }
            if(found) {
              previous.next = current.next;
              return true;
            }
            else {
              return false;
            }
          }
        }
        else {
          return false;
        }
      },

      /// Removes a node from the list.
      removeLast : function() {
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
