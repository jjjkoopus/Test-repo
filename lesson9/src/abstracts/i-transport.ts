export interface ITransport {
  brand: string;
  speed: number;

  start(): void;
  stop(): void;
  info(): string;
}
