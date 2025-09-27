
import {css} from "lit"
export default css`

button {
	background: transparent;
	border: none;
	font-size: inherit;
}

button {
	opacity: 0.5;
	cursor: pointer;
	cursor: copy;

	color: inherit;
	transition:
		color 300ms linear,
		opacity 300ms linear;

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
}

[data-status="bad"] {
	opacity: 1;
	color: var(--bad);
}

svg {
	width: 1em;
	height: 1em;
}

`

