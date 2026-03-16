
import {css} from "lit"
import {ShinyButton} from "./view.js"
import {exhibit} from "../../demo/parts/exhibit.js"
import {Showcase} from "../../demo/views/showcase/view.js"

export const buttonShowcase = () => Showcase("ShinyButton", [
	exhibit({
		name: "catalog",
		explain: "click-to-copy button.",
		render: () => [
			ShinyButton("e280"),
			ShinyButton("e280", {vibe: "happy"}),
			ShinyButton("e280", {vibe: "sad"}),
			ShinyButton("e280", {vibe: "angry"}),
			ShinyButton("e280", {vibe: "zesty"}),
			ShinyButton("e280", {vibe: "quirky"}),
			ShinyButton("e280", {vibe: "lame"}),
		],
		styleboxCss: css`
			:host {
				font-size: 1.5em;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				gap: calc(var(--padding) / 2);
			}
		`,
		js: `
			[
			ShinyButton("e280"),
			ShinyButton("e280", {vibe: "happy"}),
			ShinyButton("e280", {vibe: "sad"}),
			ShinyButton("e280", {vibe: "angry"}),
			ShinyButton("e280", {vibe: "zesty"}),
			ShinyButton("e280", {vibe: "quirky"}),
			ShinyButton("e280", {vibe: "lame"}),
			]
		`,
		css: undefined,
	}),
])

