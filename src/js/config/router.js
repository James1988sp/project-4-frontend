angular
  .module('droneApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/static/home.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/auth/register.html',
      controller: 'RegisterCtrl as register'
    })
    .state('login', {
      url: '/',
      templateUrl: 'js/views/auth/login.html',
      controller: 'LoginCtrl as login'
    })
    .state('droneIndex', {
      url: '/drones',
      templateUrl: 'js/views/drones/index.html',
      controller: 'DronesIndexCtrl as dronesIndex'
    })
    .state('droneNew', {
      url: '/drones/new',
      templateUrl: 'js/views/drones/new.html',
      controller: 'DronesNewCtrl as dronesNew'
    })
    .state('droneShow', {
      url: '/drones/:id',
      templateUrl: 'js/views/drones/show.html',
      controller: 'DronesShowCtrl as dronesShow'
    })
    .state('droneEdit', {
      url: '/drones/:id/edit',
      templateUrl: 'js/views/drones/edit.html',
      controller: 'DronesEditCtrl as dronesEdit'
    })
    .state('userIndex', {
      url: '/users',
      templateUrl: 'js/views/users/index.html',
      controller: 'UserIndexCtrl as usersIndex'
    })
    .state('userShow', {
      url: '/users/:id',
      templateUrl: 'js/views/users/show.html',
      controller: 'UserShowCtrl as usersShow'
    })
    .state('userEdit', {
      url: '/users/:id/edit',
      templateUrl: 'js/views/user/edit.html',
      controller: 'UserEditCtrl as userEdit'
    })
    .state('raceIndex', {
      url: '/races',
      templateUrl: 'js/views/races/index.html',
      controller: 'RacesIndexCtrl as racesIndex'
    })
    .state('raceNew', {
      url: '/races/new',
      templateUrl: 'js/views/races/new.html',
      controller: 'RacesNewCtrl as racesNew'
    })
    .state('raceShow', {
      url: '/races/:id',
      templateUrl: 'js/views/races/show.html',
      controller: 'RacesShowCtrl as racesShow'
    })
    .state('raceEdit', {
      url: '/races/:id/edit',
      templateUrl: 'js/views/races/edit.html',
      controller: 'RacesEditCtrl as racesEdit'
    });

  $urlRouterProvider.otherwise('/');
}
