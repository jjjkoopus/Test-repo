import { ITransport } from "./abstracts/i-transport";

export class Car implements ITransport {
  constructor(
    public brand: string,
    public speed: number
  ) {}

  start(): void {
    console.log(`${this.brand} car is starting...`);
  }

  stop(): void {
    console.log(`${this.brand} car has stopped.`);
  }

  info(): string {
    return `Car: ${this.brand}, Speed: ${this.speed} km/h`;
  }
}
