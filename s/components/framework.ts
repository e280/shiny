
import {CSSResultGroup} from "lit"
import {BaseElement} from "@e280/sly"
import {basic} from "../themes/basic.css.js"

export type ShinyContext = {theme: CSSResultGroup}

export class ShinyElement extends BaseElement {
	context: ShinyContext = {theme: basic}
}

