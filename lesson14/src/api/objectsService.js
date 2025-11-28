const baseService = require('./baseService');

class ObjectsService {
  async getAllObjects() {
    return await baseService.get('/objects');
  }

  async getObjectById(id) {
    return await baseService.get(`/objects/${id}`);
  }

  async createObject(objectData) {
    return await baseService.post('/objects', objectData);
  }

  async updateObject(id, objectData) {
    return await baseService.put(`/objects/${id}`, objectData);
  }

  async patchObject(id, partialData) {
    return await baseService.patch(`/objects/${id}`, partialData);
  }

  async deleteObject(id) {
    return await baseService.delete(`/objects/${id}`);
  }
}

module.exports = new ObjectsService();