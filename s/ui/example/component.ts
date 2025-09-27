
import {dom, view} from "@e280/sly"
import {CSSResult, html} from "lit"
import styleCss from "./style.css.js"
import {ShinyElement} from "../framework.js"

export class ShinyExample extends (
	view(use => (theme: CSSResult, start: number) => {
		use.styles(theme, styleCss)

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
	.props(el => [el.theme, el.attrs.start ?? 1] as const)
) {}

