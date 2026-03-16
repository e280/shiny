
import {css, html} from "lit"
import {ShinyDrawer} from "./view.js"
import {lipsum} from "../../demo/utils/lipsum.js"
import {exhibit} from "../../demo/parts/exhibit.js"
import {Showcase} from "../../demo/views/showcase/view.js"

const styleboxCss = css`
	:host {
		font-size: 1em;
		width: 100%;
		min-height: 100%;
	}
	p + p {
		margin-top: var(--padding);
	}
`

const customCss = css`
	[slot=plate] { padding-top: 2em; }
	[view="shiny-drawer"] {
		--slate-bg: color-mix(in oklch, var(--calm), #444);
		&::part(slate) { padding: 1em; }
		&:state(left)::part(slate) { border-bottom-right-radius: 0.5em; }
		&:state(right)::part(slate) { border-bottom-left-radius: 0.5em; }
	}
`

const render = (side: "left" | "right") => (
	ShinyDrawer.with({
		props: [{button: true, side}],
		children: html`
			<header>${lipsum.takeFirst()}</header>
			<section slot=plate>
				<p>${lipsum.takeFirst()}</p>
				<p>${lipsum.takeFirst()}</p>
			</section>
		`,
	})
)

export const drawerShowcase = () => Showcase("ShinyDrawer", [
	exhibit({
		name: "left",
		explain: "slide-out panel. button optional.",
		styleboxCss,
		css: customCss,
		render: () => render("left"),
		js: `
			ShinyDrawer.with({
				props: [{button: true, side: "left"}],
				children: html\`
					<header>lorem kettlebell..</header>
					<section slot=plate>
						<p>lorem protein..</p>
						<p>lorem caffeine..</p>
					</section>
				\`,
			})
		`,
	}),

	exhibit({
		name: "right",
		explain: "slide-out panel. button optional.",
		styleboxCss,
		css: customCss,
		render: () => render("right"),
		js: `
			ShinyDrawer.with({
				props: [{button: true, side: "right"}],
				children: html\`
					<header>lorem kettlebell..</header>
					<section slot=plate>
						<p>lorem protein..</p>
						<p>lorem caffeine..</p>
					</section>
				\`,
			})
		`,
	}),
])

