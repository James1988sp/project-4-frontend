angular
  .module('droneApp', ['ui.router', 'ngResource', 'satellizer', 'checklist-model', 'ui.bootstrap', 'ngAnimate'])
  .constant('API_URL', 'http://localhost:3000/api');
