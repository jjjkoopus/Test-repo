import { ITransport } from "./abstracts/i-transport";

export function operateTransport(vehicle: ITransport) {
  vehicle.start();
  console.log(vehicle.info());
  vehicle.stop();
}
