import { expect } from 'chai';
import { Motorcycle } from '../../src/motorcycle';
describe('Motorcycle class', () => {
    let moto: Motorcycle;

    beforeEach(() => {
        moto = new Motorcycle('Yamaha', 120);
    });

    it('should create motorcycle with brand and speed', () => {
        expect(moto.brand).to.equal('Yamaha');
        expect(moto.speed).to.equal(120);
    });

    it('should have a start method', () => {
        expect(() => moto.start()).to.not.throw();
    });

    it('should have a stop method', () => {
        expect(() => moto.stop()).to.not.throw();
    });

    it('should return correct info', () => {
        const info = moto.info();
        expect(info).to.equal('Motorcycle: Yamaha, Speed: 120 km/h');
    });
});
