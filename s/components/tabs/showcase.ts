
import {css, html} from "lit"
import {lipsum} from "../../demo/lipsum.js"
import {Showcase} from "../../demo/views/showcase/view.js"

const lip1 = lipsum()
const lip2 = lipsum()
const lip3 = lipsum()

const cssSnippet = `
	shiny-tabs {
		&::part(tabs) {}
		&::part(panels) {}
		> shiny-button {}
	}
`

export const tabsShowcase = () => Showcase({
	name: "tabs",
	style: css`
		.box {
			place-content: start start;
			p { margin-top: 0.5em; }
		}
	`,
	exhibits: [
		{
			label: "tabs",
			explain: html`<p>button bar. panels optional.</p>`,
			snippets: [
				{label: "html", code: `
					<shiny-tabs>
						<shiny-button>tab1</shiny-button>
						<shiny-button>tab2</shiny-button>
						<shiny-button>tab3</shiny-button>
						<div slot=panel>panel1</div>
						<div slot=panel>panel2</div>
						<div slot=panel>panel3</div>
					</shiny-tabs>
				`},
				{label: "view", code: `
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
				`},
				{label: "css", code: cssSnippet},
			],
			style: css``,
			presentation: views => html`
				${views.ShinyTabs
					.props()
					.children(html`
						${views.ShinyButton.props().children("tab1").render()}
						${views.ShinyButton.props().children("tab2").render()}
						${views.ShinyButton.props().children("tab3").render()}
						<p slot=panel class=lipsum>${lip1}</p>
						<p slot=panel class=lipsum>${lip2}</p>
						<p slot=panel class=lipsum>${lip3}</p>
					`)
					.render()}
			`,
		},
	],
})

