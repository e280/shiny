
import {contextualizeComponents, getViews} from "@e280/sly"
import {ShinyContext} from "./ui/framework.js"
import {rawComponents} from "./ui/raw-components.js"

export function shiny(context: ShinyContext) {
	const components = contextualizeComponents(context, rawComponents)
	const views = getViews(components)
	return {components, views}
}

export type Shiny = ReturnType<typeof shiny>
export type ShinyViews = Shiny["views"]
export type ShinyComponents = Shiny["components"]

