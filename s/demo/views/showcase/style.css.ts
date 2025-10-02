
import {css} from "lit"
export default css`@layer view {

:host {
	position: relative;

	display: flex;
	flex-direction: column;

	padding: 1em;
	border-radius: 0.5em;
	gap: 1em;

	background: linear-gradient(to right top, #252dd985, #aa6affbd);
	backdrop-filter: blur(0.5em);

	box-shadow: 0 0 5em #5d1fadaa;
	border-top: 2px solid #fff4;

	&::before {
		content: "";
		display: block;
		position: absolute;
		inset: 0;
		border-radius: 0.5em;
		background: #0007;
		width: calc(100% - 0.3em);
		height: calc(100% - 0.3em);
		margin: auto;
		z-index: 0;
	}

	> * {
		position: relative;
		z-index: 1;
	}
}

header {
	display: flex;

	h2 {
		flex: 1 1 auto;
		color: var(--prime);
	}
}

}`

