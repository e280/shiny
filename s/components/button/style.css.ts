
import {css} from "lit"
export default css`@layer view {

:host {
	--padding: var(--shiny-button, 0.3em);

	opacity: 0.8;
	display: contents;
	justify-content: center;
	align-items: center;

	border-radius: 0.2em;
	border: 0.1em solid currentColor;

	cursor: pointer;
	color: var(--alpha);
	background: transparent;
	user-select: none;
}

:host(:not([disabled]):is(:hover, :focus-visible)) { opacity: 1; }
:host(:not([disabled]):active) { opacity: 0.6; }

:host([disabled]) {
	cursor: default;
	color: var(--lame);
}

:host([hidden]) {
	display: none !important;
}

:host([angry]) {
	color: var(--angry);
}

button {
	all: inherit;
	display: inline-flex;
	padding: var(--padding);
}

slot {
	display: contents;
}

}`

