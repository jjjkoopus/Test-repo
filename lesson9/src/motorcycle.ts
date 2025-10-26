import { ITransport } from "./abstracts/i-transport";

export class Motorcycle implements ITransport {
  constructor(
    public brand: string,
    public speed: number
  ) {}

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
