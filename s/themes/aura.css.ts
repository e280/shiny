
import {css} from "lit"
import {defaultCssVars, renderCssVars} from "./infra/css-vars.js"
export const aura = css`@layer overlay {

:host {
	${renderCssVars({
		...defaultCssVars(),
	})}
}

:host([view="shiny-button"]) {
	position: relative;

	--b-bg: var(--calm);
	--padding: 0.3em 0.7em;

	color: white;
	border-radius: 2em;
	background: var(--b-bg);
	border: none;

	font-weight: medium;
	text-shadow: 0.1em 0.1em 0.1em #0004;
	box-shadow: 0.1em 0.2em 0.3em #0002;
}

:host([view="shiny-button"][angry]) {
	--b-bg: var(--angry);
}

:host([view="shiny-button"][border-gradient]) {
	border: none;
	background: linear-gradient(
		to bottom right,
		color-mix(in oklab, var(--b-bg), white 80%),
		color-mix(in oklab, var(--b-bg), black 40%)
	);

	&::before {
		content: "";
		display: block;
		position: absolute;
		z-index: 0;
		inset: 0.15em;
		border-radius: inherit;
		background: color-mix(in oklab, var(--b-bg), #0004 50%);
	}

	> * {
		position: relative;
		z-index: 1;
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

