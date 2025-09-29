
import {css} from "lit"
import {defaultCssVars, renderCssVars} from "./infra/css-vars.js"
export const plain = css`@layer overlay {

:host {
	display: block;
	${renderCssVars(defaultCssVars())}
}

}`

