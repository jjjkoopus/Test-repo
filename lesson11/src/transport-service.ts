import { ITransport } from './abstracts/i-transport';

export class TransportService {
  private transports: ITransport[] = [];

  addTransport(transport: ITransport): void {
    this.transports.push(transport);
  }

  startAll(): void {
    if (this.transports.length === 0) {
      console.log('No transports to start');
      return;
    }
    this.transports.forEach((t) => t.start());
  }

  stopAll(): void {
    this.transports.forEach((t) => t.stop());
  }
}
