
import {css} from "lit"
import {defaultCssVars, renderCssVars} from "./infra/css-vars.js"
export const aura = css`@layer overlay {

:host {
	${renderCssVars({
		...defaultCssVars(),
	})}
}

:host([view="shiny-button"]:not([plain])) {
	position: relative;

	--buttoncolor: var(--calm);
	--padding: 0.3em 0.7em;

	color: white;
	border-radius: 2em;
	background: var(--buttoncolor);
	border: none;

	font-weight: medium;
	text-shadow: 0.1em 0.1em 0.1em #0004;
	box-shadow: 0.1em 0.2em 0.3em #0002;
}

:host([view="shiny-button"][lame]) { --buttoncolor: var(--lame); }
:host([view="shiny-button"][angry]) { --buttoncolor: var(--angry); }
:host([view="shiny-button"][zesty]) { --buttoncolor: var(--zesty); }
:host([view="shiny-button"][happy]) { --buttoncolor: var(--happy); }
:host([view="shiny-button"][calm]) { --buttoncolor: var(--calm); }
:host([view="shiny-button"][sad]) { --buttoncolor: var(--sad); }
:host([view="shiny-button"][quirky]) { --buttoncolor: var(--quirky); }

:host([view="shiny-button"][gradient]:not([plain])) {
	border: none;
	background: linear-gradient(
		to bottom right,
		color-mix(in oklab, var(--buttoncolor), white 40%),
		color-mix(in oklab, var(--buttoncolor), black 20%)
	);

	&::before {
		content: "";
		display: block;
		position: absolute;
		z-index: 0;
		inset: 0.15em;
		border-radius: inherit;
		background: color-mix(in oklab, var(--buttoncolor), #0004 50%);
	}

	> * {
		position: relative;
		z-index: 1;
	}
}

:host([view="shiny-drawer"]:not([plain])) {
	display: block;

	&::part(slate) {
		padding: 1em;
		background: linear-gradient(
			to top right,
			#00a9dd69,
			#70ffd77a
		);
	}
}

:host([view="shiny-drawer"]:state(left)) {
	&::part(slate) {
		border-bottom-right-radius: 0.5em;
	}
}

:host([view="shiny-drawer"]:state(right)) {
	&::part(slate) {
		border-bottom-left-radius: 0.5em;
	}
}

}`

