
import {css, html} from "lit"
import {lipsum} from "../../demo/lipsum.js"
import {Showcase} from "../../demo/views/showcase/view.js"
import {ExhibitParams} from "../../demo/views/exhibit/view.js"

const lip1 = lipsum()
const lip2 = lipsum()
const lip3 = lipsum()

const cssSnippet = `
	shiny-drawer {
		--button-size: 2em;
		--anim-duration: 200ms;
		--slate-hidden-opacity: 1;
		--blanket-backdrop-filter: blur(0.5em);
		--blanket-bg: color-mix(
			in oklab,
			transparent,
			var(--bg)
		);
	}
`

const makeExhibit = (side: "left" | "right"): ExhibitParams => ({
	label: side,
	explain: html`<p>slide-out panel. button optional.</p>`,
	snippets: [
		{label: "html", code: `
			<shiny-drawer button side=${side}>
				<header>example</header>
				<section slot=plate>lorem kettlebell..</section>
			</shiny-drawer>
		`},
		{label: "view", code: `
			ShinyDrawer
				.props({button: true, side: "${side}"})
				.children(html\`
					<header>example</header>
					<section slot=plate>lorem kettlebell..</section>
				\`)
				.render()
		`},
		{label: "css", code: cssSnippet},
	],
	style: css``,
	presentation: views => html`
		${views.ShinyDrawer
			.props({button: true, side})
			.children(html`
				<header>
					<h2>example drawer</h2>
					<p>you can put any content in here.</p>
					<p class=lipsum>${lip1}</p>
				</header>
				<section slot=plate>
					<p class=lipsum>${lip2}</p>
					<p class=lipsum>${lip3}</p>
				</section>
			`)
			.render()}
	`,
})

export const drawerShowcase = () => Showcase({
	name: "drawer",
	style: css`
		.box sly-view {
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
	exhibits: [
		makeExhibit("left"),
		makeExhibit("right"),
	],
})

