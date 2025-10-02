
import {untab} from "@e280/stz"
import {Content, view} from "@e280/sly"
import {CSSResultGroup, html} from "lit"
import styleCss from "./style.css.js"
import {auraViews} from "../../viewsets.js"
import {foundationCss} from "../../../components/foundation.css.js"

export const Demonstration = view(use => (options: {
		name: string
		explain: Content
		snippets: [label: {button: string, text: string}, code: string][]
		content: Content
		style: CSSResultGroup
	}) => {

	use.name(`demo-${options.name}`)
	use.styles(foundationCss, styleCss, options.style)

	function codeblock(heading: string, code: string) {
		const cleanCode = untab(code).trim()
		return html`
			<div class=codeblock slot=panel>
				<div class=zone>
					<h3>${heading}</h3>
					<code>${cleanCode}</code>
				</div>
				${auraViews.ShinyCopy(cleanCode)}
			</div>
		`
	}

	return html`
		<div class=meta>
			<h2>✨ shiny-${options.name}</h2>
			<div class=explain>${options.explain}</div>
			${auraViews.ShinyTabs
				.props()
				.children(html`
					${options.snippets.map(([label]) => (
						auraViews.ShinyButton
							.props()
							.attr("plain", true)
							.children(label.button)
							.render()
					))}
					${options.snippets.map(([label, code]) => codeblock(label.text, code))}
				`)
				.render()}
		</div>

		<div class=content part=content>
			${options.content}
		</div>
	`
})

