
import {css, html} from "lit"
import {Showcase} from "../../demo/views/showcase/view.js"

const cssSnippet = `
	shiny-copy {
		font-size: 1em;
		--happy: #0fa;
		--angry: #f50;
		--lame: #8888;
		--inactive-opacity: 0.5;
	}
`

export const copyShowcase = Showcase({
	name: "copy",
	style: css`
		.box {
			> * { font-size: 6em; }
		}
	`,
	exhibits: [
		{
			label: "succeed",
			explain: html`<p>click-to-copy text button.</p>`,
			snippets: [
				{label: "html", code: `<shiny-copy text="hello world"></shiny-button>`},
				{label: "view", code: `ShinyCopy("hello world")`},
				{label: "css", code: cssSnippet},
			],
			style: css``,
			presentation: views => html`
				${views.ShinyCopy("hello world")}
			`,
		},
		{
			label: "fail",
			explain: html`<p>copy text button, deliberately fails so you can see.</p>`,
			snippets: [
				{label: "html", code: `<shiny-copy fail></shiny-button>`},
				{label: "view", code: `ShinyCopy.props("").attr("fail").render()`},
				{label: "css", code: cssSnippet},
			],
			style: css``,
			presentation: views => html`
				${views.ShinyCopy.props("").attr("fail").render()}
			`,
		},
	],
})

