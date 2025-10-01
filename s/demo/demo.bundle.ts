
import {css, html} from "lit"
import {dom, view} from "@e280/sly"
import {shiny} from "../shiny.js"
import {auraViews} from "./aura-views.js"
import {plain} from "../themes/plain.css.js"
import {makeLipsumDispenser} from "./utils/lipsum.js"
import {TabControl} from "../components/tabs/control.js"
import {Demonstration} from "./views/demonstration/view.js"

const viewsets = [
	{label: "aura", views: auraViews},
	{label: "plain", views: shiny({theme: plain}).views},
]

const labels = {
	html: {button: "html", text: "html web component"},
	view: {button: "view", text: "sly view"},
	css: {button: "css", text: "custom css"},
}

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

	const tabControl = use.once(() => new TabControl(0))
	const $viewset = use.derived(() => viewsets.at(tabControl.$index())!)
	const views = $viewset().views
	dispenser.takeAll()

	const demonstrations = [
		Demonstration({
			name: "button",
			explain: html`
				<p>clicky-clacky pressy button.</p>
			`,
			snippets: [
				[labels.html, `
					<shiny-button>hello</shiny-button>
				`],
				[labels.view, `
					ShinyButton
						.props()
						.children("hello")
						.render()
				`],
				[labels.css, `
					shiny-button {
						font-size: 1em;
						--happy: #0fa;
						--angry: #f50;
						--lame: #8888;
						--inactive-opacity: 0.5;
					}
				`],
			],
			content: [
				views.ShinyButton.props()
					.children("button")
					.render(),
				views.ShinyButton.props()
					.attr("gradient", true)
					.children("gradient")
					.render(),
				views.ShinyButton.props()
					.attr("angry", true)
					.attr("gradient", true)
					.children("angry")
					.render(),
				views.ShinyButton.props()
					.attr("happy", true)
					.attr("gradient", true)
					.children("happy")
					.render(),
				views.ShinyButton.props()
					.attr("zesty", true)
					.attr("gradient", true)
					.children("zesty")
					.render(),
				views.ShinyButton.props()
					.attr("sad", true)
					.attr("gradient", true)
					.children("sad")
					.render(),
				views.ShinyButton.props()
					.attr("quirky", true)
					.attr("gradient", true)
					.children("quirky")
					.render(),
				views.ShinyButton.props()
					.attr("plain", true)
					.children("plain")
					.render(),
			],
			style: css`
				.content {
					flex-direction: row;
					flex-wrap: wrap;
					align-content: center;
					gap: 0.5em;

					sly-view {
						font-size: 1.2em;
					}
				}
			`,
		}),

		Demonstration({
			name: "tabs",
			explain: html`
				<p>button bar. panels optional.</p>
			`,
			snippets: [
				[labels.html, `
					<shiny-tabs>
						<shiny-button>tab1</shiny-button>
						<shiny-button>tab2</shiny-button>
						<shiny-button>tab3</shiny-button>
						<div slot=panel>panel1</div>
						<div slot=panel>panel2</div>
						<div slot=panel>panel3</div>
					</shiny-tabs>
				`],
				[labels.view, `
					ShinyTabs
						.props()
						.children(html\`
							\${ShinyButton.props()
								.children("tab1").render()}
							\${ShinyButton.props()
								.children("tab2").render()}
							\${ShinyButton.props()
								.children("tab3").render()}
							<div slot=panel>panel1</div>
							<div slot=panel>panel2</div>
							<div slot=panel>panel3</div>
						\`)
						.render()
				`],
				[labels.css, `
					shiny-tabs {
						&::part(tabs) {}
						&::part(panels) {}
						> shiny-button {}
					}
				`],
			],
			content: views.ShinyTabs
				.props()
				.children(html`
					${views.ShinyButton.props().children("tab1").render()}
					${views.ShinyButton.props().children("tab2").render()}
					${views.ShinyButton.props().children("tab3").render()}
					<p slot=panel class=lipsum>${lipsum()}</p>
					<p slot=panel class=lipsum>${lipsum()}</p>
					<p slot=panel class=lipsum>${lipsum()}</p>
				`)
				.render(),
			style: css`
				.content {
					justify-content: start;
					p { margin-top: 0.5em; }
				}
			`,
		}),

		Demonstration({
			name: "copy",
			explain: html`
				<p>click-to-copy text button.</p>
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
						--happy: #0fa;
						--angry: #f50;
						--lame: #8888;
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
			name: "drawer",
			explain: html`
				<p>slide-out panel. button optional.</p>
			`,
			snippets: [
				[labels.html, `
					<shiny-drawer button side=left>
						<header>example</header>
						<section slot=plate>
							lorem kettlebell..
						</section>
					</shiny-drawer>
				`],
				[labels.view, `
					ShinyDrawer
						.props({button: true, side: "left"})
						.children(html\`
							<header>example</header>
							<section slot=plate>
								lorem kettlebell..
							</section>
						\`)
						.render()
				`],
				[labels.css, `
					shiny-drawer {
						--button-size: 2em;
						--anim-duration: 200ms;
						--blanket-backdrop-filter: blur(0.5em);
						--blanket-bg: color-mix(
							in oklab,
							transparent,
							var(--bg)
						);
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
						<p class=lipsum>${lipsum()}</p>
					</section>
				`)
				.render(),
			style: css`
				.content sly-view {
					border-radius: 0.5em;
					overflow: hidden;
					--button-size: 3em;

					header {
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
	]

	return html`
		<div class=themes>
			<span>theme</span>
			${auraViews.ShinyTabs
				.props(tabControl)
				.children(viewsets.map(viewset => html`
					${auraViews.ShinyButton.props().children(viewset.label).render()}
				`))
				.render()}
		</div>

		${demonstrations}
	`
})})

console.log("✨shiny")

