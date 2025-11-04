import { ITransport } from './abstracts/i-transport';

export class Motorcycle implements ITransport {
  public brand: string;
  public speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  start(): void {
    console.log(`${this.brand} motorcycle is roaring to life 🏍️`);
  }

  stop(): void {
    console.log(`${this.brand} motorcycle has stopped.`);
  }

  info(): string {
    return `Motorcycle: ${this.brand}, Speed: ${this.speed} km/h`;
  }
}
