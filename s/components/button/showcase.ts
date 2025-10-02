
import {css, html} from "lit"
import {Showcase} from "../../demo/views/showcase/view.js"

const cssSnippet = `
	shiny-button {
		--padding: 0.3em;
		font-size: 1em;
		color: currentColor;
		background: transparent;
	}
`

export const buttonShowcase = Showcase({
	name: "button",
	style: css`
		.box {
			> * { font-size: 2em; }
		}
	`,
	exhibits: [
		{
			label: "basic",
			explain: html`<p>clicky-clacky pressy button.</p>`,
			snippets: [
				{label: "html", code: `<shiny-button>button</shiny-button>`},
				{label: "view", code: `ShinyButton("button")`},
				{label: "css", code: cssSnippet},
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
				{label: "html", code: `<shiny-button gradient>button</shiny-button>`},
				{label: "view", code: `
					ShinyButton
						.props("button")
						.attr("gradient")
						.render()
				`},
				{label: "css", code: cssSnippet},
			],
			style: css``,
			presentation: views => html`
				${views.ShinyButton.props().attr("gradient", true).children("button").render()}
			`,
		},
		{
			label: "catalog",
			explain: html`<p>clicky-clacky pressy buttons.</p>`,
			snippets: [
				{label: "html", code: `
					<shiny-button calm gradient>calm</shiny-button>
					<shiny-button angry gradient>angry</shiny-button>
					<shiny-button happy gradient>happy</shiny-button>
					<shiny-button zesty gradient>zesty</shiny-button>
					<shiny-button sad gradient>sad</shiny-button>
					<shiny-button quirky gradient>quirky</shiny-button>
					<shiny-button plain gradient>plain</shiny-button>
				`},
				{label: "view", code: `
					[
						ShinyButton.props().attr("calm").attr("gradient").children("calm").render(),
						ShinyButton.props().attr("angry").attr("gradient").children("angry").render(),
						ShinyButton.props().attr("happy").attr("gradient").children("happy").render(),
						ShinyButton.props().attr("zesty").attr("gradient").children("zesty").render(),
						ShinyButton.props().attr("sad").attr("gradient").children("sad").render(),
						ShinyButton.props().attr("quirky").attr("gradient").children("quirky").render(),
						ShinyButton.props().attr("plain").children("plain").render(),
					]
				`},
				{label: "css", code: cssSnippet},
			],
			style: css``,
			presentation: views => [
				views.ShinyButton.props()
					.attr("calm")
					.attr("gradient")
					.children("calm")
					.render(),
				views.ShinyButton.props()
					.attr("angry")
					.attr("gradient")
					.children("angry")
					.render(),
				views.ShinyButton.props()
					.attr("happy")
					.attr("gradient")
					.children("happy")
					.render(),
				views.ShinyButton.props()
					.attr("zesty")
					.attr("gradient")
					.children("zesty")
					.render(),
				views.ShinyButton.props()
					.attr("sad")
					.attr("gradient")
					.children("sad")
					.render(),
				views.ShinyButton.props()
					.attr("quirky")
					.attr("gradient")
					.children("quirky")
					.render(),
				views.ShinyButton.props()
					.attr("plain")
					.children("plain")
					.render(),
			],
		},
	],
})

