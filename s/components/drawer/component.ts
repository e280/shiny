
import {html} from "lit"
import {dom, view} from "@e280/sly"

import {Drawer} from "./drawer.js"
import styleCss from "./style.css.js"
import {States} from "../../utils/states.js"
import xSvg from "../../icons/tabler/x.svg.js"
import {foundationCss} from "../foundation.css.js"
import menu2Svg from "../../icons/tabler/menu-2.svg.js"
import {ShinyContext, ShinyElement} from "../framework.js"

export class ShinyDrawer extends (
	view(use => (context: ShinyContext, options: {
			button: boolean
			side?: "left" | "right"
			drawer?: Drawer
		}) => {

		use.name("shiny-drawer")
		use.styles(foundationCss, context.theme, styleCss)
		const states = use.once(() => new States(use.element))

		const button = options.button
		const side = options.side ?? "left"
		const drawer = use.once(() => (options.drawer ?? new Drawer()))
		states.assign(side)

		use.mount(() => dom.events(window, {keydown: (event: KeyboardEvent) => {
			if (event.code === "Escape")
				drawer.close()
		}}))

		dom.attrs(use.element).booleans.open = drawer.isOpen

		return html`
			<div class=shell ?data-open="${drawer.isOpen}" data-side="${side}">
				<slot name=plate ?inert="${drawer.isOpen}"></slot>

				<div class=clipper>
					<div part=blanket @click="${drawer.close}" ?inert="${!drawer.isOpen}"></div>

					<div part=tray>
						<slot ?inert="${!drawer.isOpen}"></slot>

						${button
							? html`
								<button @click="${drawer.toggle}">
									${drawer.isOpen
										? html`
											<slot name=button-x>
												${xSvg}
											</slot>
										`
										: html`
											<slot name=button>
												${menu2Svg}
											</slot>
										`}
								</button>
							`
							: null}
					</div>
				</div>
			</div>
		`
	})
	.component(class extends ShinyElement {
		attrs = dom.attrs(this).spec({
			open: Boolean,
			button: Boolean,
			side: String,
		})
		drawer = new Drawer(this.attrs.open)
		get isOpen() { return this.drawer.isOpen }
		get toggle() { return this.drawer.toggle }
		get open() { return this.drawer.open }
		get close() { return this.drawer.close }
	})
	.props(el => [el.context, {
		drawer: el.drawer,
		button: el.attrs.button,
		side: el.attrs.side === "right" ? "right" : "left",
	}] as const)
) {}

