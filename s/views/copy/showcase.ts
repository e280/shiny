
import {ShinyCopy} from "./view.js"
import {exhibit} from "../../demo/parts/exhibit.js"
import {Showcase} from "../../demo/views/showcase/view.js"
import { css } from "lit"

export const copyShowcase = () => Showcase("shiny-copy", [

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
				--happy: #0fa;
				--angry: #f50;
				--lame: #8888;
				--inactive-opacity: 0.5;
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
				--happy: #0fa;
				--angry: #f50;
				--lame: #8888;
				--inactive-opacity: 0.5;
			}
		`,
	}),
])

