
import {css, html} from "lit"
import {dom, view} from "@e280/sly"
import {Showcase} from "./views/showcase/view.js"
import {makeLipsumDispenser} from "./utils/lipsum.js"
import {copyShowcase} from "../components/copy/showcase.js"
import {buttonShowcase} from "../components/button/showcase.js"

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
	//
	// 	Demonstration({
	// 		name: "drawer",
	// 		explain: html`
	// 			<p>slide-out panel. button optional.</p>
	// 		`,
	// 		snippets: [
	// 			[labels.html, `
	// 				<shiny-drawer button side=left>
	// 					<header>example</header>
	// 					<section slot=plate>
	// 						lorem kettlebell..
	// 					</section>
	// 				</shiny-drawer>
	// 			`],
	// 			[labels.view, `
	// 				ShinyDrawer
	// 					.props({button: true, side: "left"})
	// 					.children(html\`
	// 						<header>example</header>
	// 						<section slot=plate>
	// 							lorem kettlebell..
	// 						</section>
	// 					\`)
	// 					.render()
	// 			`],
	// 			[labels.css, `
	// 				shiny-drawer {
	// 					--button-size: 2em;
	// 					--anim-duration: 200ms;
	// 					--blanket-backdrop-filter: blur(0.5em);
	// 					--blanket-bg: color-mix(
	// 						in oklab,
	// 						transparent,
	// 						var(--bg)
	// 					);
	// 				}
	// 			`],
	// 		],
	// 		content: views.ShinyDrawer
	// 			.props({button: true})
	// 			.children(html`
	// 				<header>
	// 					<h2>example drawer</h2>
	// 					<p>you can put any content in here.</p>
	// 					<p class=lipsum>${lipsum()}</p>
	// 				</header>
	// 				<section slot=plate>
	// 					<p class=lipsum>${lipsum()}</p>
	// 					<p class=lipsum>${lipsum()}</p>
	// 				</section>
	// 			`)
	// 			.render(),
	// 		style: css`
	// 			.content sly-view {
	// 				border-radius: 0.5em;
	// 				overflow: hidden;
	// 				--button-size: 3em;
	//
	// 				header {
	// 					> * + * { margin-top: 0.5em; }
	// 				}
	//
	// 				section {
	// 					display: flex;
	// 					flex-direction: column;
	// 					justify-content: center;
	// 					min-height: 100%;
	// 					padding: 1em;
	// 					padding-top: 3em;
	// 					> * + * { margin-top: 0.5em; }
	// 				}
	// 			}
	// 		`,
	// 	}),
	]

	return demonstrations
})})

console.log("✨shiny✨")

