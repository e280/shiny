
import {css} from "lit"
export default css`@layer view {

section.showcase {
	position: relative;

	display: flex;
	flex-direction: column;

	padding: 1em;
	border-radius: 0.5em;
	gap: 0.5em;

	background: linear-gradient(to right top, #252dd985, #aa6affbd);
	backdrop-filter: blur(0.5em);

	box-shadow: 0 0 5em #5d1fadaa;
	border-top: 2px solid #fff4;

	&::before {
		z-index: 0;
		content: "";
		display: block;
		position: absolute;
		inset: 0;
		border-radius: 0.5em;
		background: #0006;
		width: calc(100% - 0.5em);
		height: calc(100% - 0.5em);
		margin: auto;
	}

	> * {
		z-index: 1;
		position: relative;
	}
}

header {
	display: flex;
	flex-wrap: wrap;
	place-content: center;
	gap: 0.5em;

	h2 {
		flex: 1 1 auto;
		color: var(--prime);
	}
}

.sides {
	display: flex;
	flex-wrap: wrap;
	> * {
		outline: 1px solid #f004;
		flex: 1 1 0;
	}
	background: #0004;
}

}`

