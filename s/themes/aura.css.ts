
import {css} from "lit"
import {defaultCssVars, renderCssVars} from "./infra/css-vars.js"
export const aura = css`@layer overlay {

:host {
	display: block;

	${renderCssVars({
		...defaultCssVars(),
	})}
}

:host([view="shiny-tabs"]) {
	display: block;

	&::part(tabs) {
		display: flex;
	}
}

}`

