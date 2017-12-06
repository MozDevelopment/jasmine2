(function() {
  'use strict';

  angular.module('numbers')
        .factory('events', events)

        function events() {
          return {
              publish: publish
          }

          function publish(eventName, data) {
              alert('Woo!');
              console.info("PUBLISH");
              var subscribers, x, length;

          }//publish
        }//events
})();
