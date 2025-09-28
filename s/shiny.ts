
import {contextualizeComponents, getViews} from "@e280/sly"
import {ShinyContext} from "./components/framework.js"
import {rawComponents} from "./components/raw-components.js"

export function shiny(context: ShinyContext) {
	const components = contextualizeComponents(context, rawComponents)
	const views = getViews(components)
	return {components, views}
}

export type Shiny = ReturnType<typeof shiny>
export type ShinyViews = Shiny["views"]
export type ShinyComponents = Shiny["components"]

