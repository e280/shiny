
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
			style: css`
				[part="content"] {
					font-size: 4em;
				}
			`,
		}),
		Demonstration({
			views,
			name: "shiny-burger",
			explain: html`
				<p>slide-out drawer menu</p>
			`,
			exampleComponent: `
				<shiny-burger></shiny-burger>
			`,
			exampleView: `
				ShinyBurger()
			`,
			content: views.ShinyBurger.props()
				.children(html`
					<nav slot=menu>
						<p>menu item 1</p>
						<p>menu item 2</p>
						<p>menu item 2</p>
						<p>menu item 2</p>
					</nav>
					<section>
						<p>Lorem kettlebell dolor sit amet, mountain squats consectetur trail-running. Adipiscing deadlift elit, sed do 45lb turkish get-up eiusmod tempor incididunt ut hike magna aliqua. Ut enim ad minim clean &amp; press, quis nostrud exercitation lunges ullamco kettlebell snatch trailhead nisi ut aliquip ex dolore summit irure dolor.</p>
					</section>
				`)
				.render(),
			style: css`
				nav {
					padding: 1em;
				}
				section {
					padding-left: 2.5em;
				}
			`,
		}),
	]
})})

console.log("✨shiny")

