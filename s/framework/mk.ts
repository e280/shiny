
import {CSSResultGroup} from "lit"
import {ComponentClass} from "@e280/sly"

export function mk<C extends ComponentClass<any, any>>(
		fn: (theme: CSSResultGroup) => C
	) {
	return fn
}

