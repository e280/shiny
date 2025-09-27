
import {css} from "lit"
import {dom, view} from "@e280/sly"
import {themes} from "../themes/index.js"
import {themeViews} from "../ui/themers.js"
import {Demonstration} from "./views/demonstration/view.js"

const views = themeViews(themes.basic)

dom.register({ShinyDemo: view.component(use => {
	use.styles(css`
		:host {
			display: flex;
			flex-direction: column;
			gap: 0.5em;
		}

		[view]::part(content) {
			font-size: 3em;
		}
	`)

	return [
		Demonstration({
			name: "copy",
			views,
			exampleView: `
				ShinyCopy("hello world")
			`,
			exampleComponent: `
				<shiny-copy text="hello world"></shiny-copy>
			`,
			content: views.ShinyCopy("hello world"),
		}),
	]
})})

console.log("✨ shiny")

