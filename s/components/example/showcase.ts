
import {css, html} from "lit"
import {Showcase} from "../../demo/views/showcase/view.js"

export const drawerShowcase = () => Showcase({
	name: "drawer",
	style: css`
		.box {}
	`,
	exhibits: [
		{
			label: "example",
			explain: html`<p>example component.</p>`,
			snippets: [
				{label: "html", code: `
					<shiny-example></shiny-example>
				`},
				{label: "view", code: `
					ShinyExample()
				`},
				{label: "css", code: `
					[view="shiny-example"] {}
				`},
			],
			style: css``,
			presentation: views => html`
				${views.ShinyExample()}
			`,
		},
	],
})

