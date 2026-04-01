import { Car } from '../../src/car';

describe('Car class tests', () => {
    test('creates a car with correct properties', () => {
        const car = new Car('Toyota', 120);
        expect(car.brand).toBe('Toyota');
        expect(car.speed).toBe(120);
    });

    test('starts and stops correctly', () => {
        const car = new Car('Tesla', 150);
        expect(car.start()).toBe('Tesla car is starting 🚗');
        expect(car.stop()).toBe('Tesla car has stopped.');
    });

    test('returns correct info', () => {
        const car = new Car('BMW', 200);
        expect(car.getInfo()).toBe('BMW — speed: 200 km/h');
    });
});
