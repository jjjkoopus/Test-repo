import { expect } from 'chai';
import { Truck } from '../../src/truck';

describe('Truck class', () => {
  it('should create truck with correct brand', () => {
    const truck = new Truck('Volvo', 120);
    expect(truck.brand).to.equal('Volvo');
  });

  it('should return info including speed', () => {
    const truck = new Truck('MAN', 140);
    expect(truck.info()).to.include('Speed');
  });
});
