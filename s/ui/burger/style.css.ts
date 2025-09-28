
import {css} from "lit"
export default css`

:host {
	display: block;
	width: 100%;
	height: 100%;
	--button-size: 2em;
	--drawer-height: auto;
	--anim-duration: 200ms;
}

.plate {
	position: relative;
	width: 100%;
	height: 100%;

	.blanket {
		pointer-events: none;
		opacity: 0;

		content: "";
		display: block;
		position: absolute;
		inset: 0;

		background: #0008;
		backdrop-filter: blur(0.5em);
		will-change: opacity;
		transition: all var(--anim-duration) ease;
	}

	.clipper {
		position: absolute;
		pointer-events: none;
		inset: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;

		> * {
			pointer-events: all;
		}
	}

	.drawer {
		position: absolute;
		top: 0;
		height: var(--drawer-height);

		width: calc(100% - var(--button-size));
		height: auto;

		background: #fff4;
		will-change: transform, opacity;
		transition: all var(--anim-duration) ease;

		slot[name="menu"] {}

		button {
			position: absolute;
			top: 0;
			left: 100%;
			svg {
				width: var(--button-size);
				height: var(--button-size);
			}
		}
	}

	slot.content {
		display: block;
		width: 100%;
		height: 100%;
	}

	&[data-open] {
		.blanket {
			pointer-events: all;
			opacity: 1;
		}
	}

	&:not([data-open]) {
		.drawer {
			transform: translateX(-100%);
		}
	}
}

`

