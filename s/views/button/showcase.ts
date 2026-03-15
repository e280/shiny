
import {css} from "lit"
import {ShinyButton} from "./view.js"
import {exhibit} from "../../demo/parts/exhibit.js"
import {Showcase} from "../../demo/views/showcase/view.js"

export const buttonShowcase = () => Showcase("ShinyButton", [
	exhibit({
		name: "normal",
		explain: "click-to-copy button.",
		render: () => ShinyButton("hello world"),
		js: `
			ShinyButton("hello world")
		`,
		css: css`
			[view="shiny-button"] {
				font-size: 2em;
			}
		`,
	}),
])

