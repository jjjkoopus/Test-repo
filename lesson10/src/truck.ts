import { ITransport } from "./abstracts/i-transport";

export class Truck implements ITransport {
  constructor(
    public brand: string,
    public speed: number
  ) {}

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