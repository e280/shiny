
import {css} from "lit"
export default css`

div {
	opacity: 0.7;
	cursor: pointer;
	cursor: copy;

	&:is(:hover, :focus-visible) {
		opacity: 1;
	}
}

[data-status="good"] { color: var(--good); }
[data-status="bad"] { color: var(--bad); }
[data-status="invalid"] { color: var(--invalid); }

`

