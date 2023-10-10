import { injectable } from "inversify";

@injectable()
export class Katana {
  public hit() {
    return "cut!";
  }
}
