
import {css} from "lit"
import {defaultCssVars, renderCssVars} from "./infra/css-vars.js"
export const aura = css`@layer overlay {

:host {
	display: block;

	${renderCssVars({
		...defaultCssVars(),
	})}
}

:host([view="shiny-drawer"]) {
	display: block;

	&::part(tray) {
		padding: 1em;
		background: linear-gradient(
			to top right,
			#00a9dd69,
			#70ffd77a
		);
	}
}

:host([view="shiny-drawer"]:state(left)) {
	&::part(tray) {
		border-bottom-right-radius: 0.5em;
	}
}

:host([view="shiny-drawer"]:state(right)) {
	&::part(tray) {
		border-bottom-left-radius: 0.5em;
	}
}

:host([view="shiny-tabs"]) {
	display: block;

	&::part(tabs) {
		display: flex;
	}
}

}`

