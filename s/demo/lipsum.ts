
import {makeLipsumDispenser} from "./utils/lipsum.js"

const dispenser = makeLipsumDispenser()

export const lipsum = () => dispenser.takeFirst()

