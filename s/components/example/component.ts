
import {html} from "lit"
import {dom, view} from "@e280/sly"
import styleCss from "./style.css.js"
import {foundationCss} from "../foundation.css.js"
import {ShinyContext, ShinyElement} from "../framework.js"

export class ShinyExample extends (
	view(use => (context: ShinyContext, start: number) => {
		use.name("shiny-example")
		use.styles(foundationCss, styleCss, context.theme)

		const $count = use.signal(start)
		const increment = () => { $count.value++ }

		return html`
			<button @click="${increment}">
				${$count()}
			</button>
		`
	})
	.component(class extends ShinyElement {
		attrs = dom.attrs(this).spec({start: Number})
	})
	.props(el => [el.context, el.attrs.start ?? 1] as const)
) {}

