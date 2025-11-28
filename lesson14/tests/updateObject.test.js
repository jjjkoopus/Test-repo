const { expect } = require('chai');
const objectsService = require('../src/api/objectsService');

describe('UPDATE Object', function() {
  this.timeout(10000);

  it('should update object using PATCH', async function() {
    const createData = {
      name: 'Object to Update',
      data: {
        color: 'yellow'
      }
    };

    const createResponse = await objectsService.createObject(createData);
    const objectId = createResponse.data.id;

    const updateData = {
      name: 'Updated Object Name'
    };

    const response = await objectsService.patchObject(objectId, updateData);
    expect(response.status).to.equal(200);
    expect(response.data.name).to.equal('Updated Object Name');

    await objectsService.deleteObject(objectId);
  });
});