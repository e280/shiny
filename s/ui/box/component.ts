
import {view} from "@e280/sly"
import {CSSResultGroup, html} from "lit"
import styleCss from "./style.css.js"
import {mk} from "../../framework/mk.js"

export type ShinyBox = ReturnType<typeof mkShinyBox>

export const mkShinyBox = mk(theme =>
	class extends (view(use => () => {
		use.styles(theme, styleCss)
		return html`
			<div>box</div>
		`
	})
	.component()
	.props(() => [])
) {})

