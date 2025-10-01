
import {css} from "lit"
export default css`@layer view {

:host {
	opacity: 0.8;
	display: inline-flex;
	width: max-content;
	height: max-content;

	--padding: var(--shiny-button, 0.3em);
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
	background: transparent;
	border: none;
	font: inherit;
	color: inherit;
	cursor: inherit;
	outline: inherit;

	display: inline-flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;
	padding: var(--padding);
}

slot {
	display: contents;
}

}`

