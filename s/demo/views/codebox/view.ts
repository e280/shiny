
import {html} from "lit"
import {untab} from "@e280/stz"
import {shadow, useCss} from "@e280/sly"
import styleCss from "./style.css.js"
import {themeCss} from "../../../theme/theme.css.js"
import {ShinyCopy} from "../../../views/copy/view.js"

export const Codebox = shadow((title: string, code: string) => {
	useCss(themeCss, styleCss)
	code = untab(code).trim()

	return html`
		<div class=box>
			<header>
				<h3 class=title>${title}</h3>
				<div class=buttons>${ShinyCopy(code)}</div>
			</header>

			<code>${code}</code>
		</div>
	`
})

