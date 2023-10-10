import "reflect-metadata";
import { Container } from "inversify";

import SERVICE_IDENTIFIER from "../constants/identifiers";

import { Katana, Ninja, Shuriken } from "../entities";

let container = new Container();

container.bind<Ninja>(SERVICE_IDENTIFIER.NINJA).to(Ninja);
container.bind<Katana>(SERVICE_IDENTIFIER.KATANA).to(Katana);
container.bind<Shuriken>(SERVICE_IDENTIFIER.SHURIKEN).to(Shuriken);

export default container;
