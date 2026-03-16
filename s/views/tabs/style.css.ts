
import {css} from "lit"
export default css`@layer view {

:host {
	display: inline-flex;
	flex-direction: column;
}

slot[part="tabs"] {
	display: flex;
	flex-wrap: wrap;

	&::slotted([data-tabbed]) {
		opacity: 1;
		color: currentColor;
		text-decoration: underline;
	}
}

slot[part="tabs"][data-snug] {
	&::slotted(*) {
		border-radius: var(--rounded);
	}

	&::slotted(:not([data-last], [data-next-is-tabbed])) {
		border-right: none;
	}

	&::slotted([data-tabbed]:not([data-first])) {
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

