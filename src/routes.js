(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('menuCategories', {
    url: '/menu-categories',
    templateUrl: 'src/menuapp/templates/categorieslist.template.html',
    controller: 'CategoriesController as menuCategories',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('menuItems', {
    url: '/menu-items/{shortname}',
    templateUrl: 'src/menuapp/templates/itemslist.template.html',
    controller: 'ItemsController as menuItems',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              console.log($stateParams);
              return MenuDataService.getItemsForCategory($stateParams.shortname);
            }]
    }
   })
}

})();
