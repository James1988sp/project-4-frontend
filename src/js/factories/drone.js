angular
  .module('droneApp')
  .factory('Drone', Drone);

Drone.$inject = ['$resource', 'API_URL'];
function Drone($resource, API_URL) {
  return new $resource(`${API_URL}/drones/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
