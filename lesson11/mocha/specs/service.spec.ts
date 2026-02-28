/* eslint-disable @typescript-eslint/no-unused-expressions */
import { expect } from 'chai';
import sinon from 'sinon';

class TransportService {
  start() {
    console.log('Starting transport...');
  }

  stop() {
    console.log('Stopping transport...');
  }
}

describe('TransportService with Sinon', () => {
  it('should call start once', () => {
    const service = new TransportService();
    const spy = sinon.spy(service, 'start');
    service.start();
    expect(spy.calledOnce).to.be.true;
  });

  it('should call stop once', () => {
    const service = new TransportService();
    const spy = sinon.spy(service, 'stop');
    service.stop();
    expect(spy.calledOnce).to.be.true;
  });

  it('should call start before stop', () => {
    const service = new TransportService();
    const startSpy = sinon.spy(service, 'start');
    const stopSpy = sinon.spy(service, 'stop');
    service.start();
    service.stop();
    expect(startSpy.calledBefore(stopSpy)).to.be.true;
  });

  it('should not call stop before start', () => {
    const service = new TransportService();
    const startSpy = sinon.spy(service, 'start');
    const stopSpy = sinon.spy(service, 'stop');
    service.stop();
    service.start();
    expect(stopSpy.calledBefore(startSpy)).to.be.true;
  });

  it('should call both methods exactly once', () => {
    const service = new TransportService();
    const startSpy = sinon.spy(service, 'start');
    const stopSpy = sinon.spy(service, 'stop');
    service.start();
    service.stop();
    expect(startSpy.calledOnce && stopSpy.calledOnce).to.be.true;
  });
});
