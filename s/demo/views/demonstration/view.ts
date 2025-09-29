
import {CSSResultGroup, html} from "lit"
import {untab} from "@e280/stz"
import {Content, view} from "@e280/sly"
import styleCss from "./style.css.js"
import {ShinyViews} from "../../../shiny.js"
import {basic} from "../../../themes/basic.css.js"
import {foundationCss} from "../../../components/foundation.css.js"

export const Demonstration = view(use => (options: {
		name: string
		explain: Content
		views: ShinyViews
		snippets: [label: {button: string, text: string}, code: string][]
		content: Content
		style: CSSResultGroup
	}) => {

	use.name(options.name)
	use.styles(foundationCss, basic, styleCss, options.style)

	function codeblock(heading: string, code: string) {
		const cleanCode = untab(code).trim()
		return html`
			<div class=codeblock slot=panel>
				<div class=zone>
					<h3>${heading}</h3>
					<code>${cleanCode}</code>
				</div>
				${options.views.ShinyCopy(cleanCode)}
			</div>
		`
	}

	return html`
		<div class=meta>
			<h2>✨ ${options.name}</h2>
			<div class=explain>${options.explain}</div>
			${options.views.ShinyTabs
				.props()
				.children(html`
					${options.snippets.map(([label]) => html`
						<button>${label.button}</button>
					`)}
					${options.snippets.map(([label, code]) => codeblock(label.text, code))}
				`)
				.render()}
		</div>

		<div class=content part=content>
			${options.content}
		</div>
	`
})

