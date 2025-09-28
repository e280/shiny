
import {css, html} from "lit"
import {dom, view} from "@e280/sly"
import {shiny} from "../shiny.js"
import {basic} from "../themes/basic.css.js"
import {Demonstration} from "./views/demonstration/view.js"

const {views} = shiny({theme: basic})

const labels = {
	html: "html web component",
	view: "sly view",
	css: "custom css",
}

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
			snippets: [
				[labels.html, `
					<shiny-copy text="hello world"></shiny-copy>
				`],
				[labels.view, `
					ShinyCopy("hello world")
				`],
				[labels.css, `
					shiny-copy {
						font-size: 1em;
						--good: #0f4;
						--bad: #f40;
						--invalid: #8888;
					}
				`],
			],
			content: views.ShinyCopy("hello world"),
			style: css`
				.content sly-view {
					font-size: 4em;
				}
			`,
		}),
		Demonstration({
			views,
			name: "shiny-drawer",
			explain: html`
				<p>slide-out panel with optional burger button</p>
			`,
			snippets: [
				[labels.html, `
					<shiny-drawer button>
						<div slot=drawer>example</div>
						<section>lorem kettlebell..</section>
					</shiny-drawer>
				`],
				[labels.view, `
					ShinyDrawer.props().children(html\`
						<div slot=drawer>example</div>
						<section>lorem kettlebell..</section>
					\`).render()
				`],
				[labels.css, `
					shiny-drawer {
						--button-size: 2em;
						--drawer-height: auto;
						--anim-duration: 200ms;
						--blanket-bg: #1118;
						--drawer-bg: #7778;
					}
				`],
			],
			content: views.ShinyDrawer.props()
				.children(html`
					<div slot=drawer>
						<h2>example drawer</h2>
						<p>you can put any content in here.</p>
						<p>lorem kettlebell dolor sit amet, mountain squats consectetur trail-running. adipiscing deadlift elit, sed do 45lb turkish get-up eiusmod tempor incididunt ut hike magna aliqua. ut enim ad minim clean &amp; press, quis nostrud exercitation lunges ullamco kettlebell snatch trailhead nisi ut aliquip ex dolore summit irure dolor.</p>
					</div>
					<section>
						<p>lorem kettlebell dolor sit amet, mountain squats consectetur trail-running. adipiscing deadlift elit, sed do 45lb turkish get-up eiusmod tempor incididunt ut hike magna aliqua. ut enim ad minim clean &amp; press, quis nostrud exercitation lunges ullamco kettlebell snatch trailhead nisi ut aliquip ex dolore summit irure dolor.</p>
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
						border-bottom-right-radius: 0.5em;
						background: #fff4;
						> * + * { margin-top: 0.5em; }
					}
					section {
						padding: 0.5em;
						padding-left: 2em;
						> * + * { margin-top: 0.5em; }
					}
				}
			`,
		}),
	]
})})

console.log("✨shiny")

