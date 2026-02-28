import { ITransport } from './abstracts/i-transport';

export class Truck implements ITransport {
  public brand: string;
  public speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  start(): void {
    console.log(`${this.brand} truck is starting with a heavy load 🚛`);
  }

  stop(): void {
    console.log(`${this.brand} truck has stopped.`);
  }

  info(): string {
    return `Truck: ${this.brand}, Speed: ${this.speed} km/h`;
  }
}
