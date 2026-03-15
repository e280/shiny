
import {html} from "lit"
import Prism from "prismjs"
import {untab} from "@e280/stz"
import {shadow, useCss} from "@e280/sly"

import styleCss from "./style.css.js"
import {usePrismStyles} from "./use-prism-styles.js"
import {themeCss} from "../../../theme/theme.css.js"
import {ShinyCopy} from "../../../views/copy/view.js"
import {unsafeHTML} from "lit/directives/unsafe-html.js"

export const Codebox = shadow((lang: "js" | "css", code: string) => {
	const prismStyles = usePrismStyles()
	useCss(themeCss, prismStyles, styleCss)

	code = untab(code).trim()
	const higlighted = Prism.highlight(
		code,
		lang === "js"
			? Prism.languages.javascript
			: Prism.languages.css,
		lang,
	)

	return html`
		<div class=box>
			<header>
				<h3 class=title>${lang}</h3>
				<div class=buttons>${ShinyCopy(code)}</div>
			</header>

			<code>${unsafeHTML(higlighted)}</code>
		</div>
	`
})

