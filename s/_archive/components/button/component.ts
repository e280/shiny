
import {html} from "lit"
import {Content, view} from "@e280/sly"
import styleCss from "./style.css.js"
import {foundationCss} from "../foundation.css.js"
import {ShinyContext, ShinyElement} from "../framework.js"

export class ShinyButton extends (
	view(use => (context: ShinyContext, content?: Content) => {
		use.name("shiny-button")
		use.styles(foundationCss, context.theme, styleCss)

		const attrs = use.attrs.spec({
			disabled: Boolean,
			hidden: Boolean,
		})

		return html`
			<button
				part=button
				?disabled="${attrs.disabled}"
				?hidden="${attrs.hidden}">
					<slot>${content}</slot>
			</button>
		`
	})
	.component(ShinyElement)
	.props(el => [el.context] as const)
) {}

