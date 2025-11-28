const { expect } = require('chai');
const objectsService = require('../src/api/objectsService');

describe('GET Object by ID', function() {
  this.timeout(10000);
  let objectId = '1';

  it('should get object by ID', async function() {
    const response = await objectsService.getObjectById(objectId);
    expect(response.status).to.equal(200);
    expect(response.data.id).to.equal(objectId);
  });
});