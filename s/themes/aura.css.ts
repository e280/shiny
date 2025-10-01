
import {css} from "lit"
import {defaultCssVars, renderCssVars} from "./infra/css-vars.js"
export const aura = css`@layer overlay {

:host {
	${renderCssVars({
		...defaultCssVars(),
	})}
}

xxx:host([view="shiny-button"]) {
	position: relative;

	--padding: 0.3em 0.7em;
	border-radius: 2em;
	background: linear-gradient(
		to bottom right,
		cyan,
		blue
	);
	border: none;
	box-shadow: 0.1em 0.2em 0.3em #0004;

	&::before {
		content: "";
		display: block;
		position: absolute;
		inset: 0;
		background: red;
	}
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
	slot[part="tabs"] {
		display: flex;

		&::slotted(:not([data-last], [data-next-is-active])) {
			border-right: none;
		}

		&::slotted([data-active]:not([data-first])) {
			border-left: none;
		}

		&::slotted(:not([data-last])) {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		&::slotted(:not([data-first])) {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}
}

}`

