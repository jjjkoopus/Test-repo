import { ITransport } from './abstracts/i-transport';

export class Motorcycle implements ITransport {
    public constructor(
        public brand: string,
        public speed: number
    ) {}

    public start(): void {
        console.log(`${this.brand} motorcycle is roaring to life 🏍️`);
    }

    public stop(): void {
        console.log(`${this.brand} motorcycle has stopped.`);
    }

    public info(): string {
        return `Motorcycle: ${this.brand}, Speed: ${this.speed} km/h`;
    }
}
