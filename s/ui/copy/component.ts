
import {debounce} from "@e280/stz"
import {dom, view} from "@e280/sly"

import {CSSResult, html} from "lit"
import styleCss from "./style.css.js"
import {ShinyElement} from "../framework.js"
import clipboardSvg from "../../icons/tabler/clipboard.svg.js"
import clipboardXFilledSvg from "../../icons/tabler/clipboard-x-filled.svg.js"
import clipboardCheckFilledSvg from "../../icons/tabler/clipboard-check-filled.svg.js"

export class ShinyCopy extends (
	view(use => (theme: CSSResult, text: string | undefined, ms = 1000) => {
		use.styles(theme, styleCss)

		type Status = "neutral" | "good" | "bad" | "invalid"

		const baseStatus = () => (
			text === undefined
				? "invalid"
				: "neutral"
		)

		const $status = use.signal<Status>(baseStatus())
		const statusReset = use.once(() => debounce(ms, () => $status.set(baseStatus())))
		const statusFlash = use.once(() => async(status: Status) => {
			await $status.set(status)
			await statusReset()
		})

		async function click() {
			if (text === undefined) return
			try {
				await navigator.clipboard.writeText(text)
				await statusFlash("good")
			}
			catch (error) {
				console.error(error)
				await statusFlash("bad")
			}
		}

		const icon = (() => {switch ($status.get()) {
			case "neutral": return clipboardSvg
			case "invalid": return clipboardSvg
			case "good": return clipboardCheckFilledSvg
			case "bad": return clipboardXFilledSvg
			default: throw new Error(`invalid copy status`)
		}})()

		return html`
			<div data-status="${$status.get()}" @click="${click}">
				${icon}
			</div>
		`
	})
	.component(class extends ShinyElement {
		attrs = dom.attrs(this).spec({
			text: String,
			ms: Number,
		})
	})
	.props(el => [el.theme, el.attrs.text, el.attrs.ms])
) {}

