
import {CSSResultGroup} from "lit"
import {BaseElement} from "@e280/sly"

export type ShinyContext = {theme: CSSResultGroup}

export class ShinyElement extends BaseElement {
	context!: ShinyContext
}

