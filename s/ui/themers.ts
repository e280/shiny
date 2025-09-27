
import {CSSResult} from "lit"
import {DropFirst, ob} from "@e280/stz"
import {ComponentClass, ViewProps} from "@e280/sly"

import {components} from "./components.js"
import {ShinyElement} from "./framework.js"

export function themeComponents(theme: CSSResult) {
	return ob(components).map(C => class extends C {
		theme = theme
		static view = super.view.transmute((...props) => [theme, ...props] as any) as any
	}) as {
		[K in keyof typeof components]: ComponentClass<
			typeof ShinyElement,
			DropFirst<ViewProps<(typeof components)[K]["view"]>>
		>
	}
}

export function themeViews(theme: CSSResult) {
	return ob(themeComponents(theme)).map(C => C.view)
}

