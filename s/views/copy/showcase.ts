
import {css} from "lit"
import {ShinyCopy} from "./view.js"
import {exhibit} from "../../demo/parts/exhibit.js"
import {Showcase} from "../../demo/views/showcase/view.js"

export const copyShowcase = () => Showcase("ShinyCopy", [
	exhibit({
		name: "normal",
		explain: "click-to-copy button.",
		render: () => ShinyCopy("hello world"),
		js: `
			ShinyCopy("hello world")
		`,
		css: css`
			[view="shiny-copy"] {
				font-size: 5em;
				--shiny-happy: #0fa;
				--shiny-angry: #f50;
				--shiny-lame: #8888;
				--shiny-inactive-opacity: 0.5;
			}
		`,
	}),

	exhibit({
		name: "fail",
		explain: "click-to-copy button, deliberately fails so you can see.",
		render: () => ShinyCopy("hello world", {fail: true}),
		js: `
			ShinyCopy("hello world", {fail: true})
		`,
		css: css`
			[view="shiny-copy"] {
				font-size: 5em;
				--shiny-happy: #0fa;
				--shiny-angry: #f50;
				--shiny-lame: #8888;
				--shiny-inactive-opacity: 0.5;
			}
		`,
	}),
])

