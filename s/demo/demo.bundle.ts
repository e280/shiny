
import {css, html} from "lit"
import {dom, view} from "@e280/sly"
import {Showcase} from "./views/showcase/view.js"
import {makeLipsumDispenser} from "./utils/lipsum.js"
import {copyShowcase} from "../components/copy/showcase.js"
import {buttonShowcase} from "../components/button/showcase.js"
import { drawerShowcase } from "../components/drawer/showcase.js"

const dispenser = makeLipsumDispenser()
const lipsum = () => dispenser.takeFirst()

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

	dispenser.takeAll()

	const demonstrations = [
		buttonShowcase,
		copyShowcase,
		drawerShowcase,

	// 	Demonstration({
	// 		name: "tabs",
	// 		explain: html`
	// 			<p>button bar. panels optional.</p>
	// 		`,
	// 		snippets: [
	// 			[labels.html, `
	// 				<shiny-tabs>
	// 					<shiny-button>tab1</shiny-button>
	// 					<shiny-button>tab2</shiny-button>
	// 					<shiny-button>tab3</shiny-button>
	// 					<div slot=panel>panel1</div>
	// 					<div slot=panel>panel2</div>
	// 					<div slot=panel>panel3</div>
	// 				</shiny-tabs>
	// 			`],
	// 			[labels.view, `
	// 				ShinyTabs
	// 					.props()
	// 					.children(html\`
	// 						\${ShinyButton.props()
	// 							.children("tab1").render()}
	// 						\${ShinyButton.props()
	// 							.children("tab2").render()}
	// 						\${ShinyButton.props()
	// 							.children("tab3").render()}
	// 						<div slot=panel>panel1</div>
	// 						<div slot=panel>panel2</div>
	// 						<div slot=panel>panel3</div>
	// 					\`)
	// 					.render()
	// 			`],
	// 			[labels.css, `
	// 				shiny-tabs {
	// 					&::part(tabs) {}
	// 					&::part(panels) {}
	// 					> shiny-button {}
	// 				}
	// 			`],
	// 		],
	// 		content: views.ShinyTabs
	// 			.props()
	// 			.children(html`
	// 				${views.ShinyButton.props().children("tab1").render()}
	// 				${views.ShinyButton.props().children("tab2").render()}
	// 				${views.ShinyButton.props().children("tab3").render()}
	// 				<p slot=panel class=lipsum>${lipsum()}</p>
	// 				<p slot=panel class=lipsum>${lipsum()}</p>
	// 				<p slot=panel class=lipsum>${lipsum()}</p>
	// 			`)
	// 			.render(),
	// 		style: css`
	// 			.content {
	// 				justify-content: start;
	// 				p { margin-top: 0.5em; }
	// 			}
	// 		`,
	// 	}),
	]

	return demonstrations
})})

console.log("✨shiny✨")

