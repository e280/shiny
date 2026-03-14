
import {css} from "lit"
export default css`@layer view {

:host {
	display: block;
	width: 100%;
	height: 100%;
	--slate-bg: transparent;
	--button-size: 2em;
	--blanket-backdrop-filter: blur(0.5em);
	--slate-hidden-opacity: 1;
	--blanket-bg: color-mix(in oklab, transparent, var(--bg));
}

.shell {
	position: relative;
	width: 100%;
	height: 100%;

	[part="blanket"] {
		opacity: 0;

		content: "";
		display: block;
		position: absolute;
		inset: 0;

		background: var(--blanket-bg);
		backdrop-filter: var(--blanket-backdrop-filter);

		will-change: opacity;
		transition: all var(--anim-duration) ease;
	}

	.clipper {
		pointer-events: none;
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		> * { pointer-events: all; }
	}

	[part="tray"] {
		position: absolute;
		top: 0;
		width: calc(100% - var(--button-size));

		display: flex;
		flex-direction: column;
		height: auto;
		max-height: 100%;

		transform: translateX(-100%);
		will-change: opacity, transform;
		transition: all var(--anim-duration) ease;

		> [part="slate"] {
			opacity: var(--slate-hidden-opacity);
			will-change: opacity;
			transition: opacity var(--anim-duration) ease;

			display: block;
			height: 100%;
			overflow-y: auto;
			background: var(--slate-bg);
		}

		> button {
			position: absolute;
			top: 0;
			left: 100%;

			opacity: var(--inactive-opacity);
			background: transparent;
			border: none;
			cursor: pointer;

			&:is(:hover, :focus-visible) {
				opacity: 1;
			}

			> slot {
				display: contents;
			}

			svg {
				width: var(--button-size);
				height: var(--button-size);
			}
		}
	}

	&[data-side="right"] {
		[part="tray"] {
			right: 0;
			transform: translateX(100%);
			> button {
				left: unset;
				right: 100%;
			}
		}
	}

	slot[name="plate"] {
		display: block;
		width: 100%;
		height: 100%;
	}

	&[data-open] {
		[part="blanket"] {
			opacity: 1;
		}
		[part="tray"] {
			transform: translateX(0%);
			> [part="slate"] {
				opacity: 1;
			}
		}
	}
}

}`

