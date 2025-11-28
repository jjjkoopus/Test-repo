const { expect } = require('chai');
const objectsService = require('../src/api/objectsService');

describe('DELETE Object', function() {
  this.timeout(10000);

  it('should create and delete object', async function() {
    const testData = {
      name: 'Object to Delete',
      data: {
        color: 'green'
      }
    };

    const createResponse = await objectsService.createObject(testData);
    const objectId = createResponse.data.id;

    const deleteResponse = await objectsService.deleteObject(objectId);
    expect(deleteResponse.status).to.equal(200);
  });
});