
import {css} from "lit"
export default css`@layer view {

:host {
	opacity: 0.8;
	display: contents;
	justify-content: center;
	align-items: center;

	padding: 0.5em;
	border-radius: 0.2em;
	border: 0.1em solid currentColor;

	cursor: pointer;
	color: var(--alpha);
	background: transparent;
	user-select: none;
}

/* TODO */
:host-context([view="shiny-tabs"]) {
	outline: 3px solid red;
}

:host(:is(:hover, :focus-visible)) { opacity: 1; }
:host(:active) { opacity: 0.6; }

:host([disabled]) {
	cursor: default;
	color: var(--lame);
	opacity: var(--inactive-opacity);
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
}

slot {
	display: contents;
}

}`

