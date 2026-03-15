
import {html} from "lit"
import {shadow, useCss, useName} from "@e280/sly"

import styleCss from "./style.css.js"
import clipboardSvg from "../../icons/tabler/clipboard.svg.js"
import clipboardXFilledSvg from "../../icons/tabler/clipboard-x-filled.svg.js"
import clipboardCheckFilledSvg from "../../icons/tabler/clipboard-check-filled.svg.js"

import {useCopier} from "./parts/use-copier.js"
import {themeCss} from "../../theme/theme.css.js"

export const ShinyCopy = shadow((
		text: string | undefined,
		options: {ms?: number, fail?: boolean} = {},
	) => {

	useName("shiny-copy")
	useCss(themeCss, styleCss)
	const copier = useCopier(text, options.ms ?? 1000)

	async function click() {
		if (text === undefined) return
		try {
			if (options.fail)
				throw new Error("copy failed on purpose for testing purposes")
			await navigator.clipboard.writeText(text)
			await copier.flash("good")
		}
		catch (error) {
			console.error(error)
			await copier.flash("bad")
		}
	}

	return html`
		<button data-status="${copier.status}" @click="${click}">
			${(() => {switch (copier.status) {
				case "neutral":
					return clipboardSvg

				case "invalid":
					return clipboardSvg

				case "good":
					return clipboardCheckFilledSvg

				case "bad":
					return clipboardXFilledSvg

				default:
					throw new Error(`unknown copy status`)
			}})()}
			<slot></slot>
		</button>
	`
})

