
import {css} from "lit"
export default css`@layer view {

:host {
	display: inline-flex;
	flex-direction: column;
}

slot[part="tabs"] {
	display: flex;
	flex-wrap: wrap;

	&::slotted([data-active]) {
		opacity: 1;
		color: currentColor;
		text-decoration: underline;
	}
}

:host([snug]) slot[part="tabs"] {
	&::slotted(*) {
		border-radius: 0.3em;
	}

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

} `

