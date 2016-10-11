(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);

// Version with resolving to 1 item based on $stateParams in route config
ItemsController.$inject = ['items'];
function ItemsController(items) {
  var menuItems = this;
  menuItems.items = items;
  console.log(items);
}

})();
