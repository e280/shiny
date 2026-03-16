
import {css, html} from "lit"
import {ShinyCopy} from "./view.js"
import {exhibit} from "../../demo/parts/exhibit.js"
import {Showcase} from "../../demo/views/showcase/view.js"

export const copyShowcase = () => Showcase("ShinyCopy", [
	exhibit({
		name: "normal",
		explain: "click-to-copy button.",
		render: () => ShinyCopy("hello world"),
		styleboxCss: css`
			:host {
				font-size: 5em;
			}
		`,
		js: `
			ShinyCopy("hello world")
		`,
		css: css`
			[view="shiny-copy"] {
				--shiny-happy: #0fa;
				--shiny-angry: #f50;
				--shiny-lame: #8888;
				--shiny-inactive-opacity: 0.5;
			}
		`,
	}),

	exhibit({
		name: "fail",
		explain: html`
			<p>click-to-copy button. <em>deliberately fails so you can see.</em></p>
		`,
		render: () => ShinyCopy("hello world", {fail: true}),
		styleboxCss: css`
			:host {
				font-size: 4em;
			}
		`,
		js: `
			ShinyCopy("hello world", {fail: true})
		`,
		css: css`
			[view="shiny-copy"] {
				--shiny-happy: #0fa;
				--shiny-angry: #f50;
				--shiny-lame: #8888;
				--shiny-inactive-opacity: 0.5;
			}
		`,
	}),
])

