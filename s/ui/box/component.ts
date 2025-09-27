
import {view} from "@e280/sly"
import {CSSResult, html} from "lit"
import styleCss from "./style.css.js"
import {ShinyElement} from "../framework.js"

export class ShinyBox extends (
	view(use => (theme: CSSResult, count: number) => {
		use.styles(theme, styleCss)
		return html`
			<div>box ${count}</div>
		`
	})
	.component(ShinyElement)
	.props(el => [el.theme, 1])
) {}

