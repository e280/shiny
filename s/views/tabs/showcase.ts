
import {css, html} from "lit"
import {ShinyTabs} from "./view.js"
import {exhibit} from "../../demo/parts/exhibit.js"
import {Showcase} from "../../demo/views/showcase/view.js"

export const tabsShowcase = () => Showcase("ShinyTabs", [
	exhibit({
		name: "normal",
		explain: "tabs.",
		render: () => ShinyTabs.with({
			props: [{snug: true}],
			children: html`
				<button>alpha</button>
				<button>bravo</button>
				<button>charlie</button>
				<div slot=panel>alpha</div>
				<div slot=panel>bravo</div>
				<div slot=panel>charlie</div>
			`,
		}),
		js: `
			ShinyTabs.with({
				props: [{snug: true}],
				children: html\`
					<button>alpha</button>
					<button>bravo</button>
					<button>charlie</button>
					<div slot=panel>alpha</div>
					<div slot=panel>bravo</div>
					<div slot=panel>charlie</div>
				\`,
			})
		`,
		css: css`
			[view="shiny-tabs"] {
			}
		`,
	}),
])

