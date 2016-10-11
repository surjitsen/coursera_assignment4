(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('CategoriesPath', "https://davids-restaurant.herokuapp.com/categories.json")
.constant('ItemsBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");


MenuDataService.$inject = ['$http', 'CategoriesPath', 'ItemsBasePath']
function MenuDataService($http, CategoriesPath, ItemsBasePath) {
  var service = this;

  service.getAllCategories = function () {
    return $http({ method: "GET", url: CategoriesPath })
    .then(function (result) {
      return result.data;
    })
    .catch(function (error) {
      return null;
    })
  }

  service.getItemsForCategory = function(shortName) {
    console.log("Short name:" + shortName);
    return $http({ method: "GET", url: ItemsBasePath, params: { "category": shortName }})
    .then(function (result) {
      return result.data.menu_items;
    })
    .catch(function (error) {
      return null;
    })
  }
}

})();
