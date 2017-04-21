angular
  .module('droneApp')
  .factory('Race', Race);

Race.$inject = ['$resource', 'API_URL'];
function Race($resource, API_URL) {
  return new $resource(`${API_URL}/races/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
