(function() {
  'use strict';

  angular.module('numbers')
      .factory('operations', operations);

      operations.$inject = ['events'];

      function operations(events) {
        return {
          add: add
        }

        function add() {
          var operands = Array.prototype.slice.call(arguments),
              total = 0;
              console.log("ADD");

              operands.forEach(function(value) {
                if(typeof value === 'string') {
                  value = parseInt(value, 10) || 0;
                }
                total += value
              });

              events.publish('added', {
                  operands: operands,
                  result: total
              });

          return total;
        }
      }//operations


})();
