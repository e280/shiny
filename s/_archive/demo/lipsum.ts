
import {makeLipsumDispenser} from "./utils/lipsum.js"

export const lipsumDispenser = makeLipsumDispenser()
export const lipsum = () => lipsumDispenser.takeFirst()

