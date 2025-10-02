
import {html} from "lit"
import {dom, view} from "@e280/sly"

import styleCss from "./style.css.js"
import {DrawerControl} from "./control.js"
import {States} from "../../utils/states.js"
import xSvg from "../../icons/tabler/x.svg.js"
import {foundationCss} from "../foundation.css.js"
import menu2Svg from "../../icons/tabler/menu-2.svg.js"
import {ShinyContext, ShinyElement} from "../framework.js"

export class ShinyDrawer extends (
	view(use => (context: ShinyContext, options: {
			button?: boolean
			side?: "left" | "right"
			control?: DrawerControl
		}) => {

		use.name("shiny-drawer")
		use.styles(foundationCss, context.theme, styleCss)
		const states = use.once(() => new States(use.element))

		const button = options.button ?? use.attrs.booleans.button
		const side = options.side ?? (use.attrs.strings.side === "right" ? "right" : "left")
		const control = use.once(() => (options.control ?? new DrawerControl()))
		states.assign(side)

		use.mount(() => dom.events(window, {keydown: (event: KeyboardEvent) => {
			if (event.code === "Escape")
				control.close()
		}}))

		dom.attrs(use.element).booleans.open = control.isOpen

		function renderButton() {
			return html`
				<button @click="${control.toggle}">
					${control.isOpen
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
		}

		return html`
			<div class=shell ?data-open="${control.isOpen}" data-side="${side}">
				<slot name=plate ?inert="${control.isOpen}"></slot>

				<div class=clipper>
					<div part=blanket @click="${control.close}" ?inert="${!control.isOpen}"></div>

					<div part=tray>
						<slot part=slate ?inert="${!control.isOpen}"></slot>
						${button ?renderButton() :null}
					</div>
				</div>
			</div>
		`
	})
	.component(class extends ShinyElement {
		#attrs = dom.attrs(this).spec({
			open: Boolean,
			button: Boolean,
			side: String,
		})

		get button() { return this.#attrs.button }
		set button(v) { this.#attrs.button = v }

		get side() { return this.#attrs.side === "right" ? "right" : "left" }
		set side(v) { this.#attrs.side = v }

		control = new DrawerControl(this.#attrs.open)
		get isOpen() { return this.control.isOpen }
		get toggle() { return this.control.toggle }
		get open() { return this.control.open }
		get close() { return this.control.close }
	})
	.props(el => [el.context, el.control] as const)
) {}

