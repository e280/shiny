
import {css, html} from "lit"
import {ShinyTabs} from "./view.js"
import {ShinyButton} from "../button/view.js"
import {lipsum} from "../../demo/utils/lipsum.js"
import {exhibit} from "../../demo/parts/exhibit.js"
import {Showcase} from "../../demo/views/showcase/view.js"

export const tabsShowcase = () => Showcase("ShinyTabs", [
	exhibit({
		name: "shiny",
		explain: "a button-bar of mutually-exclusive tabs. panels are optional.",
		render: () => ShinyTabs.with({
			props: [{snug: true}],
			children: html`
				${ShinyButton("alpha")}
				${ShinyButton("bravo")}
				${ShinyButton("charlie")}
				<p slot=panel>${lipsum.takeFirst()}</p>
				<p slot=panel>${lipsum.takeFirst()}</p>
				<p slot=panel>${lipsum.takeFirst()}</p>
			`,
		}),
		styleboxCss: css`
			[view="shiny-button"] { font-size: 1.2em; }
			p { margin-top: var(--padding); }
		`,
		js: `
			ShinyTabs.with({
				props: [{snug: true}],
				children: html\`
					\${ShinyButton("alpha")}
					\${ShinyButton("bravo")}
					\${ShinyButton("charlie")}
					<p slot=panel>lorem kettlebell..</p>
					<p slot=panel>lorem protein..</p>
					<p slot=panel>lorem caffeine..</p>
				\`,
			})
		`,
		css: css`
			[view="shiny-tabs"] {
				--shiny-rounded: 0.5em;
			}
		`,
	}),

	exhibit({
		name: "plain",
		explain: "a button-bar of mutually-exclusive tabs. panels are optional.",
		render: () => ShinyTabs.with({
			props: [{snug: true}],
			children: html`
				<button>alpha</button>
				<button>bravo</button>
				<button>charlie</button>
				<p slot=panel>${lipsum.takeFirst()}</p>
				<p slot=panel>${lipsum.takeFirst()}</p>
				<p slot=panel>${lipsum.takeFirst()}</p>
			`,
		}),
		styleboxCss: css`
			p { margin-top: var(--padding); }
			button {
				font-size: 1.5em;
				padding: calc(var(--padding) / 2);
			}
		`,
		js: `
			ShinyTabs.with({
				props: [{snug: true}],
				children: html\`
					<button>alpha</button>
					<button>bravo</button>
					<button>charlie</button>
					<p slot=panel>lorem kettlebell..</p>
					<p slot=panel>lorem protein..</p>
					<p slot=panel>lorem caffeine..</p>
				\`,
			})
		`,
		css: css`
			[view="shiny-tabs"] {
				--shiny-rounded: 0.5em;
			}
		`,
	}),
])

