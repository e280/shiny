
import {css} from "lit"
export default css`

:host {
	display: block;
	width: 100%;
	height: 100%;
	--button-size: 2em;
	--drawer-height: auto;
	--anim-duration: 200ms;
	--blanket-bg: #1118;
	--blanket-backdrop-filter: blur(0.5em);
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
		height: 100%;

		opacity: 1;
		transform: translateX(-100%);
		will-change: opacity, transform;
		transition: all var(--anim-duration) ease;

		> slot {
			display: block;
			height: var(--drawer-height);
			max-height: 100%;
			overflow-y: auto;
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
			opacity: 1;
			transform: translateX(0%);
		}
	}
}

`

