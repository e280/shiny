
import {html} from "lit"
import {Content, view} from "@e280/sly"
import styleCss from "./style.css.js"
import {untab} from "../../../tools/untab.js"
import {ShinyViews} from "../../../ui/themers.js"
import {basic} from "../../../themes/basic.css.js"

export const Demonstration = view(use => (options: {
		name: string
		views: ShinyViews
		exampleView: string
		exampleComponent: string
		content: Content
	}) => {

	use.name(`demo-${options.name}`)
	use.styles(basic, styleCss)

	function codeblock(classname: string, code: string) {
		const cleanCode = untab(code).trim()
		return html`
			<div class=codeblock>
				<code class="${classname}">${cleanCode}</code>
				${options.views.ShinyCopy(cleanCode)}
			</div>
		`
	}

	return html`
		<div class=content part=content>
			${options.content}
		</div>

		<div class=meta>
			<h2>${options.name}</h2>
			<div class=explain>
				<p>helps users click-to-copy text</p>
			</div>
			<div class=codes>
				${codeblock("view", options.exampleView)}
				${codeblock("component", options.exampleComponent)}
			</div>
		</div>
	`
})

