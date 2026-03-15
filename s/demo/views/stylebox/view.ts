
import {CSSResult} from "lit"
import {Content, shadow, useCss} from "@e280/sly"
import {themeCss} from "../../../theme/theme.css.js"

export const Stylebox = shadow((styles: CSSResult, render: () => Content) => {
	useCss(themeCss, styles)
	return render()
})

