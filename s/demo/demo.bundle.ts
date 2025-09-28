
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
				.content sly-view {
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
				<shiny-burger>
					<div slot=drawer>example</div>
					<section>lorem kettlebell..</section>
				</shiny-burger>
			`,
			exampleView: `
				ShinyBurger.props().children(html\`
					<div slot=drawer>example</div>
					<section>lorem kettlebell..</section>
				\`).render()
			`,
			content: views.ShinyBurger.props()
				.children(html`
					<div slot=drawer>
						<h2>example drawer</h2>
						<p>you can put any content in here.</p>
						<p>lorem kettlebell dolor sit amet, mountain squats consectetur trail-running. adipiscing deadlift elit, sed do 45lb turkish get-up eiusmod tempor incididunt ut hike magna aliqua. ut enim ad minim clean &amp; press, quis nostrud exercitation lunges ullamco kettlebell snatch trailhead nisi ut aliquip ex dolore summit irure dolor.</p>
						<p>lorem kettlebell dolor sit amet, mountain squats consectetur trail-running. adipiscing deadlift elit, sed do 45lb turkish get-up eiusmod tempor incididunt ut hike magna aliqua. ut enim ad minim clean &amp; press, quis nostrud exercitation lunges ullamco kettlebell snatch trailhead nisi ut aliquip ex dolore summit irure dolor.</p>
					</div>
					<section>
						<p>lorem kettlebell dolor sit amet, mountain squats consectetur trail-running. adipiscing deadlift elit, sed do 45lb turkish get-up eiusmod tempor incididunt ut hike magna aliqua. ut enim ad minim clean &amp; press, quis nostrud exercitation lunges ullamco kettlebell snatch trailhead nisi ut aliquip ex dolore summit irure dolor.</p>
					</section>
				`)
				.render(),
			style: css`
				.content sly-view {
					border-radius: 0.5em;
					overflow: hidden;
					[slot="drawer"] {
						padding: 0.5em;
						> * + * { margin-top: 0.5em; }
					}
					section {
						padding: 0.5em;
						padding-left: 2em;
					}
				}
			`,
		}),
	]
})})

console.log("✨shiny")

