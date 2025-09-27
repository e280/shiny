
import {ob} from "@e280/stz"
import {CSSResultGroup} from "lit"
import themeCss from "../framework/theme.css.js"
import {mkShinyBox} from "./box/component.js"

export function mkComponents(theme: CSSResultGroup = themeCss) {
	return {
		ShinyBox: mkShinyBox(theme),
	}
}

export function mkViews(theme: CSSResultGroup) {
	return ob(mkComponents(theme)).map(C => C.view)
}

