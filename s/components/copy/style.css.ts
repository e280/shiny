
import {css} from "lit"
export default css`@layer view {

button {
	background: transparent;
	border: none;
	font-size: inherit;
}

button {
	opacity: var(--inactive-opacity);
	cursor: pointer;
	cursor: copy;

	color: inherit;
	transition: all 300ms linear;

	&:is(:hover, :focus-visible) {
		opacity: 1;
	}
}

[data-status="invalid"] {
	color: var(--invalid);
}

[data-status="good"] {
	opacity: 1;
	color: var(--good);
	filter: drop-shadow(0 0 0.3em color-mix(in oklab, transparent, currentColor 50%));
}

[data-status="bad"] {
	opacity: 1;
	color: var(--bad);
	filter: drop-shadow(0 0 0.3em color-mix(in oklab, transparent, currentColor 50%));
}

svg {
	width: 1em;
	height: 1em;
}

}`

