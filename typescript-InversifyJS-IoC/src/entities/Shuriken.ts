import { injectable } from "inversify";

@injectable()
export class Shuriken {
  public throw() {
    return "hit!";
  }
}
