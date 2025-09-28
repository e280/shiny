
import {CSSResultGroup, html} from "lit"
import {untab} from "@e280/stz"
import {Content, view} from "@e280/sly"
import styleCss from "./style.css.js"
import {ShinyViews} from "../../../shiny.js"
import {basic} from "../../../themes/basic.css.js"

export const Demonstration = view(use => (options: {
		name: string
		explain: Content
		views: ShinyViews
		snippets: [label: string, code: string][]
		content: Content
		style: CSSResultGroup
	}) => {

	use.name(options.name)
	use.styles(basic, styleCss, options.style)

	function codeblock(heading: string, code: string) {
		const cleanCode = untab(code).trim()
		return html`
			<div class=codeblock>
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
			<div class=codes>
				${options.snippets.map(([label, code]) => codeblock(label, code))}
			</div>
		</div>

		<div class=content part=content>
			${options.content}
		</div>
	`
})

