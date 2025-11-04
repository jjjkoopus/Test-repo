/* eslint-disable @typescript-eslint/no-unused-expressions */
import { expect } from 'chai';
import sinon from 'sinon';
import { TransportService } from '../../src/transport-service';
import { Car } from '../../src/car';
import { Truck } from '../../src/truck';

describe('TransportService integration tests', () => {
  it('should add and start transport correctly', () => {
    const service = new TransportService();
    const car = new Car('Toyota', 180);
    const startSpy = sinon.spy(car, 'start');

    service.addTransport(car);
    service.startAll();

    expect(startSpy.calledOnce).to.be.true;
  });

  it('should stop all transports', () => {
    const service = new TransportService();
    const truck = new Truck('MAN', 120);
    const stopSpy = sinon.spy(truck, 'stop');

    service.addTransport(truck);
    service.startAll();
    service.stopAll();

    expect(stopSpy.calledOnce).to.be.true;
  });

  it('should handle multiple transports', () => {
    const service = new TransportService();
    const car = new Car('Audi', 200);
    const truck = new Truck('Volvo', 150);
    const carStart = sinon.spy(car, 'start');
    const truckStart = sinon.spy(truck, 'start');

    service.addTransport(car);
    service.addTransport(truck);
    service.startAll();

    expect(carStart.calledOnce && truckStart.calledOnce).to.be.true;
  });

  it('should not start when no transports', () => {
    const service = new TransportService();
    const spy = sinon.spy(console, 'log');

    service.startAll();
    expect(spy.calledWith('No transports to start')).to.be.true;

    spy.restore();
  });

  it('should return correct info for each transport', () => {
    const car = new Car('BMW', 220);
    const info = car.getInfo();
    expect(info).to.include('BMW').and.include('220');
  });
});
