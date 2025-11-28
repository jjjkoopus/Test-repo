const { expect } = require('chai');
const objectsService = require('../src/api/objectsService');

describe('CREATE Object', function() {
  this.timeout(10000);

  it('should create a new object', async function() {
    const testData = {
      name: 'Test Object',
      data: {
        color: 'red',
        capacity: '500GB'
      }
    };

    const response = await objectsService.createObject(testData);
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property('id');
    expect(response.data.name).to.equal('Test Object');
  });
});