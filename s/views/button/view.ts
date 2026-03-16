
import {html} from "lit"
import {Content, shadow, useCss, useName, useAttrs} from "@e280/sly"

import styleCss from "./style.css.js"
import {themeCss} from "../../theme/theme.css.js"

export const ShinyButton = shadow((content?: Content, options: {
		vibe?: "calm" | "lame" | "happy" | "sad" | "angry" | "zesty" | "quirky"
	} = {}) => {

	useName("shiny-button")
	useCss(themeCss, styleCss)

	const attrs = useAttrs({
		hidden: Boolean,
		disabled: Boolean,
	})

	return html`
		<button
			part=button
			data-vibe="${options.vibe ?? "calm"}"
			?disabled="${attrs.disabled}"
			?hidden="${attrs.hidden}">
			<slot>${content}</slot>
		</button>
	`
})

