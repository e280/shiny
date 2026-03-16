
import {css} from "lit"
export default css`@layer view {

:host {
	display: inline-flex;
	width: max-content;
	height: max-content;

	cursor: pointer;
	background: transparent;
	user-select: none;

	--button-padding: 0.3em 0.7em;
	--button-color: var(--calm);
}

slot {
	z-index: 1;
	position: relative;
	display: block;
}

button {
	opacity: 0.8;
	position: relative;

	font: inherit;
	cursor: inherit;
	text-shadow: inherit;
	font-weight: medium;

	display: inline-flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;
	padding: var(--button-padding);

	border-radius: 2em;
	background: var(--button-color);
	text-shadow: 0.1em 0.1em 0.1em #0004;
	box-shadow: 0.1em 0.2em 0.3em #0002;

	color: white;
	border: none;
	background: linear-gradient(
		to bottom right,
		color-mix(in oklab, var(--button-color), white 40%),
		color-mix(in oklab, var(--button-color), black 20%)
	);

	&::before {
		content: "";
		display: block;
		position: absolute;
		z-index: 0;
		inset: 0.15em;
		border-radius: inherit;
		background: color-mix(in oklab, var(--button-color), #0004 50%);
	}

	&:not([disabled]):is(:hover, :focus-visible) { opacity: 1; }
	&:not([disabled]):active { opacity: 0.6; }

	&[data-vibe="lame"] { --button-color: var(--lame); }
	&[data-vibe="angry"] { --button-color: var(--angry); }
	&[data-vibe="zesty"] { --button-color: var(--zesty); }
	&[data-vibe="happy"] { --button-color: var(--happy); }
	&[data-vibe="calm"] { --button-color: var(--calm); }
	&[data-vibe="sad"] { --button-color: var(--sad); }
	&[data-vibe="quirky"] { --button-color: var(--quirky); }
	&[data-vibe="tabbed"] { --button-color: var(--tabbed); }

	> * {
		position: relative;
		z-index: 1;
	}

	&[disabled] {
		cursor: default;
	}

	&[hidden] {
		display: none !important;
	}
}

:host([data-tabbed]) > button {
	opacity: 1;
	filter: brightness(120%);
}

:host(:not([data-tabbed])) > button[disabled] {
	--button-color: var(--lame);
}

:host([data-snug]:not([data-last], [data-next-is-tabbed])) > button {
	border-right: none;
}

:host([data-snug][data-tabbed]:not([data-first])) > button {
	border-left: none;
}

:host([data-snug]:not([data-last])) > button {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}

:host([data-snug]:not([data-first])) > button {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}

}`

