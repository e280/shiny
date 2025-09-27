
import {html} from "lit"
import {Content, view} from "@e280/sly"
import styleCss from "./style.css.js"
import {basic} from "../../../themes/basic.css.js"

export const Demonstration = view(use => (options: {
		name: string
		exampleView: string
		exampleComponent: string
		content: Content
	}) => {

	use.styles(basic, styleCss)

	return html`
		<div class=meta>
			<h2>${options.name}</h2>
			<div class=example-view>${options.exampleView}</div>
			<div class=example-component>${options.exampleComponent}</div>
		</div>

		<div class=content>
			${options.content}
		</div>
	`
})

