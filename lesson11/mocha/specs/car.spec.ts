/* eslint-disable @typescript-eslint/no-unused-expressions */
import { expect } from 'chai';
import sinon from 'sinon';
import { Car } from '../../src/car';

describe('Car class', () => {
  let car: Car;

  beforeEach(() => {
    car = new Car('Toyota', 120);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should start correctly', () => {
    const consoleSpy = sinon.spy(console, 'log');
    car.start();
    expect(consoleSpy.calledWith('Toyota car is starting...')).to.be.true;
  });

  it('should stop correctly', () => {
    const consoleSpy = sinon.spy(console, 'log');
    car.stop();
    expect(consoleSpy.calledWith('Toyota car has stopped.')).to.be.true;
  });

  it('should return correct info', () => {
    const info = car.info();
    expect(info).to.equal('Car: Toyota, Speed: 120 km/h');
  });
});
