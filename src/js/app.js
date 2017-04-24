angular
  .module('droneApp', ['ui.router', 'ngResource', 'satellizer', 'checklist-model', 'ngAnimate'])
  .constant('API_URL', 'http://localhost:3000/api');
