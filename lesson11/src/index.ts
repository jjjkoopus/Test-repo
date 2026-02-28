import { Car } from './car';
import { Motorcycle } from './motorcycle';
import { Truck } from './truck';
import { TransportService } from './transport-service';

const transportService = new TransportService();
const bmw = new Car('BMW', 220);
const yamaha = new Motorcycle('Yamaha', 180);
const volvoTruck = new Truck('Volvo', 120);

transportService.addTransport(bmw);
transportService.addTransport(yamaha);
transportService.addTransport(volvoTruck);

transportService.startAll();
