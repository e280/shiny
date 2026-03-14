
import {css} from "lit"
import {dom, view} from "@e280/sly"
import {lipsumDispenser} from "./lipsum.js"
import {copyShowcase} from "../components/copy/showcase.js"
import {tabsShowcase} from "../components/tabs/showcase.js"
import {buttonShowcase} from "../components/button/showcase.js"
import {drawerShowcase} from "../components/drawer/showcase.js"

dom.register({ShinyDemo: view.component(use => {
	use.styles(css`
		:host {
			display: flex;
			flex-direction: column;
			gap: 1em;
		}

		.themes {
			display: flex;
			justify-content: end;
			gap: 0.5em;

			span {
				font-size: 1.2em;
				opacity: 0.5;
				font-family: serif;
				font-style: italic;
			}

			[view="demo-tabs"] {
				display: flex;
			}
		}
	`)

	lipsumDispenser.takeAll()

	return [
		buttonShowcase(),
		copyShowcase(),
		drawerShowcase(),
		tabsShowcase(),
	]
})})

console.log("✨shiny✨")

