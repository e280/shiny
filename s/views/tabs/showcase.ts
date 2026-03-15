
import {css, html} from "lit"
import {ShinyTabs} from "./view.js"
import {ShinyButton} from "../button/view.js"
import {exhibit} from "../../demo/parts/exhibit.js"
import {Showcase} from "../../demo/views/showcase/view.js"

export const tabsShowcase = () => Showcase("ShinyTabs", [
	exhibit({
		name: "shiny",
		explain: "a button-bar of mutually-exclusive tabs. panels are optional.",
		render: () => ShinyTabs.with({
			props: [{snug: true}],
			children: html`
				${ShinyButton("alpha")}
				${ShinyButton("bravo")}
				${ShinyButton("charlie")}
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
				--shiny-rounded: 0.5em;
			}
		`,
	}),

	exhibit({
		name: "normal",
		explain: "a button-bar of mutually-exclusive tabs. panels are optional.",
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
				--shiny-rounded: 0.5em;
			}
		`,
	}),
])

