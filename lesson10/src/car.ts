export class Car {
    public constructor(
        public brand: string,
        public speed: number
    ) {}

    public start(): string {
        return `${this.brand} car is starting 🚗`;
    }

    public stop(): string {
        return `${this.brand} car has stopped.`;
    }

    public getInfo(): string {
        return `${this.brand} — speed: ${this.speed} km/h`;
    }
}
