import container from "./config/ioc_config";
import SERVICE_IDENTIFIER from "./constants/identifiers";
import { Ninja } from "./entities/Ninja";

const test = container.get<Ninja>(SERVICE_IDENTIFIER.NINJA);

console.log(test.fight());
console.log(test.sneak());
console.log(test);
