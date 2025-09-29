
import {css} from "lit"
export default css`@layer view {

:host {
	position: relative;

	display: flex;
	flex-wrap: wrap;

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

p.lipsum {
	opacity: 0.7;
	font-family: serif;
	font-style: italic;
}

.meta {
	flex: 1 1 10em;
	display: flex;
	flex-direction: column;
	gap: 0.5em;

	h2 {
		color: var(--prime);
	}

	.codes {
		display: flex;
		flex-direction: column;
		gap: 0.2em;
	}

	.codeblock {
		display: flex;
		background: #0002;
		border-radius: 0.3em;
		border-bottom: 1px solid #fff2;
		box-shadow: inset 0.2em 0.3em 2em #0004;

		.zone {
			flex: 1 1 auto;
			display: flex;
			flex-direction: column;
			padding: 0.5em;

			h3 {
				opacity: 0.4;
				font-size: 0.7em;
				font-weight: normal;
				font-style: italic;
			}

			code {
				display: block;
				white-space: pre;
				text-wrap: wrap;
				tab-size: 2;
				word-break: break-word;

				font-size: 0.8em;
				font-family: monospace;
				color: #8f8;
			}
		}

		[view="shiny-copy"] {
			flex: 0 0 0;
			padding: 0.2em;
		}
	}
}

.content {
	flex: 1 1 10rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 1rem;
	border-radius: 0.5rem;
	border: 1px dashed #fff4;
}

}`

