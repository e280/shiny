
import {css} from "lit"
export default css`@layer view {

.box {
	display: flex;
	flex-direction: column;
	background: #0004;
	border-radius: var(--rounded);
}

header {
	display: flex;
	justify-content: space-between;
	padding: calc(var(--padding) / 4) var(--padding);

	.title {
		opacity: 0.4;
		font-size: 1em;
		font-weight: normal;
	}

	.buttons {
		display: flex;
		font-size: 1.2em;
	}
}

code {
	padding: calc(var(--padding) / 4) var(--padding);
	color: var(--code);
	white-space: pre;
	tab-size: 2;
}

}`

