import { Car } from "./car";
import { Motorcycle } from "./motorcycle";
import { Truck } from "./truck";
import { operateTransport } from "./transport-service";

const bmw = new Car("BMW", 220);
const yamaha = new Motorcycle("Yamaha", 180);
const volvoTruck = new Truck("Volvo", 120);

operateTransport(bmw);
operateTransport(yamaha);
operateTransport(volvoTruck);
