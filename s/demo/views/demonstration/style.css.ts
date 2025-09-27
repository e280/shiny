
import {css} from "lit"
export default css`

:host {
	display: flex;
	flex-wrap: wrap;

	padding: 1em;
	border-radius: 0.5em;
	gap: 1em;

	background: #555;
	box-shadow: 0.2em 0.3em 0.5em #0002;
	border-top: 1px solid #fff4;
}

.meta {
	flex: 1 1 10em;
	display: flex;
	flex-direction: column;
	gap: 0.5em;

	.codes {
		display: flex;
		flex-direction: column;
		gap: 0.2em;
	}

	.codeblock {
		display: flex;
		background: #0002;
		border-radius: 0.3em;

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
	border: 1px #fff4 dashed;
}

`

