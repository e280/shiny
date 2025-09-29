
import {css, html} from "lit"
import {dom, view} from "@e280/sly"
import {shiny} from "../shiny.js"
import {basic} from "../themes/basic.css.js"
import {makeLipsumDispenser} from "./utils/lipsum.js"
import {Demonstration} from "./views/demonstration/view.js"
import { Drawer } from "../components/drawer/drawer.js"

const {views} = shiny({theme: basic})

const labels = {
	html: "html web component",
	view: "sly view",
	css: "custom css",
}

const lipsum = (() => {
	const dispenser = makeLipsumDispenser()
	return () => dispenser.takeRandom()
})()

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
						--inactive-opacity: 0.5;
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
					<shiny-drawer button side=left>
						<header>example</header>
						<section slot=plate>lorem kettlebell..</section>
					</shiny-drawer>
				`],
				[labels.view, `
					ShinyDrawer
						.props({button: true, side: "left"})
						.children(html\`
							<header>example</header>
							<section slot=plate>lorem kettlebell..</section>
						\`)
						.render()
				`],
				[labels.css, `
					shiny-drawer {
						--button-size: 2em;
						--anim-duration: 200ms;
						--tray-height: auto;
						--blanket-bg: #1118;
						--blanket-backdrop-filter: blur(0.5em);
						--inactive-opacity: 0.5;
					}
				`],
			],
			content: views.ShinyDrawer
				.props({button: true})
				.children(html`
					<header>
						<h2>example drawer</h2>
						<p>you can put any content in here.</p>
						<p class=lipsum>${lipsum()}</p>
					</header>
					<section slot=plate>
						<p class=lipsum>${lipsum()}</p>
					</section>
				`)
				.render(),
			style: css`
				.content sly-view {
					border-radius: 0.5em;
					overflow: hidden;
					--button-size: 3em;

					p.lipsum {
						opacity: 0.7;
						font-family: serif;
						font-style: italic;
					}

					header {
						padding: 0.5em;
						border-bottom-right-radius: 0.5em;
						background: linear-gradient(
							to top right,
							#00a9dd69,
							#70ffd77a
						);
						> * + * { margin-top: 0.5em; }
					}

					section {
						display: flex;
						flex-direction: column;
						justify-content: center;
						min-height: 100%;
						padding: 1em;
						padding-top: 3em;
						> * + * { margin-top: 0.5em; }
					}
				}
			`,
		}),

		Demonstration({
			views,
			name: "shiny-tabs",
			explain: html`
				<p>tabbable buttons</p>
			`,
			snippets: [
				[labels.html, `
					<shiny-tabs>
						<button>tab1</button>
						<button>tab2</button>
						<button>tab3</button>
						<div slot=panel>panel1</div>
						<div slot=panel>panel2</div>
						<div slot=panel>panel3</div>
					</shiny-tabs>
				`],
				[labels.view, `
					ShinyTabs
						.props()
						.children(html\`
							<button>tab1</button>
							<button>tab2</button>
							<button>tab3</button>
							<div slot=panel>panel1</div>
							<div slot=panel>panel2</div>
							<div slot=panel>panel3</div>
						\`)
						.render()
				`],
				[labels.css, `
					shiny-tabs::part(tabs) {}
					shiny-tabs::part(panels) {}
				`],
			],
			content: views.ShinyTabs
				.props()
				.children(html`
					<button>tab1</button>
					<button>tab2</button>
					<button>tab3</button>
					<div slot=panel>panel1</div>
					<div slot=panel>panel2</div>
					<div slot=panel>panel3</div>
				`)
				.render(),
			style: css`
				.content sly-view {}
			`,
		}),
	]
})})

console.log("✨shiny")

