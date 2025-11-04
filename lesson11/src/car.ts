import { ITransport } from './abstracts/i-transport';

export class Car implements ITransport {
  public brand: string;
  public speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  start(): void {
    console.log(`${this.brand} car is starting...`);
  }

  stop(): void {
    console.log(`${this.brand} car has stopped.`);
  }

  info(): string {
    return `Car: ${this.brand}, Speed: ${this.speed} km/h`;
  }

  getInfo(): string {
    return `${this.brand} — speed: ${this.speed} km/h`;
  }
}
