import { inject, injectable } from "inversify";
import { Katana } from "./Katana";
import { Shuriken } from "./Shuriken";
import SERVICE_IDENTIFIER from "../constants/identifiers";

@injectable()
export class Ninja {
  private _katana: Katana;
  private _shuriken: Shuriken;

  public constructor(
    @inject(SERVICE_IDENTIFIER.KATANA) katana: Katana,
    @inject(SERVICE_IDENTIFIER.SHURIKEN) shuriken: Shuriken
  ) {
    this._katana = katana;
    this._shuriken = shuriken;
  }

  public fight() {
    return this._katana.hit();
  }
  public sneak() {
    return this._shuriken.throw();
  }
}
