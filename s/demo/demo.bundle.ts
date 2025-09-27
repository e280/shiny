
import {html} from "lit"
import {dom, view} from "@e280/sly"
import {themes} from "../themes/index.js"
import {themeViews} from "../ui/themers.js"
import {Demonstration} from "./views/demonstration/view.js"

const views = themeViews(themes.basic)

dom.register({ShinyDemo: view.component(() => html`
	${Demonstration({
		name: "copy",
		exampleView: `
			ShinyCopy("hello world")
		`,
		exampleComponent: `
			<shiny-copy text="hello world"></shiny-copy>
		`,
		content: views.ShinyCopy("hello world"),
	})}
`)})

console.log("✨ shiny")

