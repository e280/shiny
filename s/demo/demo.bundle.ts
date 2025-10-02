
import {css, html} from "lit"
import {dom, view} from "@e280/sly"
import {Showcase} from "./views/showcase/view.js"
import {makeLipsumDispenser} from "./utils/lipsum.js"

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
		Showcase({
			name: "button",
			style: css`
				.box {
					padding: 1em;
					> * { font-size: 2em; }
				}
			`,
			exhibits: [
				{
					label: "basic",
					explain: html`<p>clicky-clacky pressy button.</p>`,
					snippets: [
						{
							label: "html",
							code: `<shiny-button>button</shiny-button>`,
						},
						{
							label: "view",
							code: `ShinyButton("button")`,
						},
					],
					style: css``,
					presentation: views => html`
						${views.ShinyButton.props().children("button").render()}
					`,
				},
				{
					label: "gradient",
					explain: html`<p>added <code>gradient</code> attribute.</p>`,
					snippets: [
						{
							label: "html",
							code: `<shiny-button gradient>button</shiny-button>`,
						},
						{
							label: "view",
							code: `
								ShinyButton
									.props("button")
									.attr("gradient")
									.render()
							`,
						},
					],
					style: css``,
					presentation: views => html`
						${views.ShinyButton.props().attr("gradient", true).children("button").render()}
					`,
				},
			],
		}),

	// 	Demonstration({
	// 		name: "button",
	// 		explain: html`
	// 			<p>clicky-clacky pressy button.</p>
	// 		`,
	// 		snippets: [
	// 			[labels.html, `
	// 				<shiny-button>hello</shiny-button>
	// 			`],
	// 			[labels.view, `
	// 				ShinyButton
	// 					.props()
	// 					.children("hello")
	// 					.render()
	// 			`],
	// 			[labels.css, `
	// 				shiny-button {
	// 					font-size: 1em;
	// 					--happy: #0fa;
	// 					--angry: #f50;
	// 					--lame: #8888;
	// 					--inactive-opacity: 0.5;
	// 				}
	// 			`],
	// 		],
	// 		content: [
	// 			views.ShinyButton.props()
	// 				.children("button")
	// 				.render(),
	// 			views.ShinyButton.props()
	// 				.attr("gradient", true)
	// 				.children("gradient")
	// 				.render(),
	// 			views.ShinyButton.props()
	// 				.attr("angry", true)
	// 				.attr("gradient", true)
	// 				.children("angry")
	// 				.render(),
	// 			views.ShinyButton.props()
	// 				.attr("happy", true)
	// 				.attr("gradient", true)
	// 				.children("happy")
	// 				.render(),
	// 			views.ShinyButton.props()
	// 				.attr("zesty", true)
	// 				.attr("gradient", true)
	// 				.children("zesty")
	// 				.render(),
	// 			views.ShinyButton.props()
	// 				.attr("sad", true)
	// 				.attr("gradient", true)
	// 				.children("sad")
	// 				.render(),
	// 			views.ShinyButton.props()
	// 				.attr("quirky", true)
	// 				.attr("gradient", true)
	// 				.children("quirky")
	// 				.render(),
	// 			views.ShinyButton.props()
	// 				.attr("plain", true)
	// 				.children("plain")
	// 				.render(),
	// 		],
	// 		style: css`
	// 			.content {
	// 				flex-direction: row;
	// 				flex-wrap: wrap;
	// 				align-content: center;
	// 				gap: 0.5em;
	//
	// 				sly-view {
	// 					font-size: 1.2em;
	// 				}
	// 			}
	// 		`,
	// 	}),
	//
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
	// 		name: "copy",
	// 		explain: html`
	// 			<p>click-to-copy text button.</p>
	// 		`,
	// 		snippets: [
	// 			[labels.html, `
	// 				<shiny-copy text="hello world"></shiny-copy>
	// 			`],
	// 			[labels.view, `
	// 				ShinyCopy("hello world")
	// 			`],
	// 			[labels.css, `
	// 				shiny-copy {
	// 					font-size: 1em;
	// 					--happy: #0fa;
	// 					--angry: #f50;
	// 					--lame: #8888;
	// 					--inactive-opacity: 0.5;
	// 				}
	// 			`],
	// 		],
	// 		content: views.ShinyCopy("hello world"),
	// 		style: css`
	// 			.content sly-view {
	// 				font-size: 4em;
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

