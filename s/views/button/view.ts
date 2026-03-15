
import {html} from "lit"
import {Content, shadow, useCss, useName, useAttrs} from "@e280/sly"

import styleCss from "./style.css.js"
import {themeCss} from "../../theme/theme.css.js"

export const ShinyButton = shadow((content?: Content) => {
	useName("shiny-button")
	useCss(themeCss, styleCss)

	const attrs = useAttrs({
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

