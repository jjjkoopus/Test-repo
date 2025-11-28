const { expect } = require('chai');
const objectsService = require('../src/api/objectsService');

describe('GET All Objects', function() {
  this.timeout(10000);

  it('should get all objects', async function() {
    const response = await objectsService.getAllObjects();
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
  });
});