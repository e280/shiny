
import {css, html} from "lit"
import {dom, view} from "@e280/sly"
import {shiny} from "../shiny.js"
import {basic} from "../themes/basic.css.js"
import {Demonstration} from "./views/demonstration/view.js"

const {views} = shiny({theme: basic})

dom.register({ShinyDemo: view.component(use => {
	use.styles(css`
		:host {
			display: flex;
			flex-direction: column;
			gap: 1em;
		}

		[view="shiny-copy"]::part(content) {
			font-size: 4em;
		}
	`)

	return [
		Demonstration({
			views,
			name: "shiny-copy",
			explain: html`
				<p>button for click-to-copy text</p>
			`,
			exampleComponent: `
				<shiny-copy text="hello world"></shiny-copy>
			`,
			exampleView: `
				ShinyCopy("hello world")
			`,
			content: views.ShinyCopy("hello world"),
		}),
	]
})})

console.log("✨shiny")

