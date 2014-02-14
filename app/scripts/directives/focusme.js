'use strict';

angular.module('datastructuresApp')
  .directive('focusMe', function ($timeout) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        scope.$watch(attrs.focusMe, function(value) {
          if (value === true) {
            $timeout(function() {
              element[0].select();
              scope[attrs.focusMe] = false;
            });
          }
        });
      }
    };
  });