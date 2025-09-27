
import {CSSResult} from "lit"
import {DropFirst, ob} from "@e280/stz"
import {View, ViewProps} from "@e280/sly"
import {components} from "./components.js"

export function themeComponents(theme: CSSResult) {
	return ob(components).map(C => class extends C {
		theme = theme
	})
}

export function themeViews(theme: CSSResult) {
	return (
		ob(themeComponents(theme))
			.map(C => C.view.transmute((...props: any[]) => [theme, ...props] as any))
	) as any as {
		[K in keyof typeof components]: View<DropFirst<ViewProps<(typeof components)[K]["view"]>>>
	}
}

