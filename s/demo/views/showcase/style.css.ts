
import {css} from "lit"
export default css`@layer view {

section.showcase {
	position: relative;

	display: flex;
	flex-direction: column;

	padding: 1em;
	border-radius: var(--rounded);
	gap: var(--padding);

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
		border-radius: var(--rounded);
		background: #0006;
		width: calc(100% - var(--padding));
		height: calc(100% - var(--padding));
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
	gap: var(--padding);

	h2 {
		flex: 1 1 auto;
		color: var(--prime);
	}
}

.sides {
	display: flex;
	flex-wrap: wrap;
	gap: var(--padding);

	> * {
		flex: 1 1 0;
	}

}

.codezone {
	display: flex;
	flex-direction: column;
	gap: var(--padding);

	> * {
		flex: 1 1 auto;
	}
}

.stage {
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	padding: calc(var(--padding) * 2) var(--padding);
	border: 1px dashed color-mix(in oklch, transparent, currentColor 50%);
	border-radius: var(--rounded);
}

}`

