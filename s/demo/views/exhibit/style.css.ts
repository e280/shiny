
import {css} from "lit"
export default css`@layer view {

:host {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5em;

	> * {
		flex: 1 1 0;
		min-width: 0;
	}
}

.meta {
	display: flex;
	flex-direction: column;
	gap: 1em;
}

.snippet {
	flex: 1 0 auto;
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	padding: 0.5em;

	background: #0002;
	box-shadow: inset 0.2em 0.3em 2em #0004;
	border-radius: 0.5em;

	> header {
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		[view="shiny-copy"] { font-size: 1.5em; }
		[view="shiny-tabs"] {
			flex: 1 1 auto;
			font-size: 0.8em;
			color: color-mix(in oklab, transparent, currentColor 50%);
		}
	}

	> code {
		display: block;

		white-space: pre;
		text-wrap: wrap;
		tab-size: 2;
		word-break: keep-all;
		overflow: auto;

		color: var(--code);
		font-size: 0.8em;
		font-family: monospace;
	}
}

.box {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center;

	gap: 0.5em;
	padding: 1em;

	border-radius: 0.5rem;
	border: 1px dashed color-mix(in oklab, transparent, currentColor 30%);

	p.lipsum {
		opacity: 0.7;
		font-family: serif;
		font-style: italic;
	}
}

}`

