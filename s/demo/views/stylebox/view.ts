
import {CSSResult, html, unsafeCSS} from "lit"
import {Content, shadow, useCss, useName} from "@e280/sly"
import {themeCss} from "../../../theme/theme.css.js"

export const Stylebox = shadow((
		styleboxCss: CSSResult,
		styles: CSSResult,
		content: Content,
	) => {

	useName("stylebox")
	useCss(themeCss, styleboxCss, styles)

	return html`
		<style>${unsafeCSS(styleboxCss)}</style>
		<style>${unsafeCSS(styles)}</style>
		${content}
	`
})

