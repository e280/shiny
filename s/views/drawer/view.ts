
import {html} from "lit"
import {dom, shadow, useAttrs, useCss, useHost, useMount, useName, useOnce} from "@e280/sly"

import styleCss from "./style.css.js"

import {themeCss} from "../../theme/theme.css.js"
import {DrawerControl} from "./control.js"
import {States} from "../../utils/states.js"
import xSvg from "../../icons/tabler/x.svg.js"
import menu2Svg from "../../icons/tabler/menu-2.svg.js"

export const ShinyDrawer = shadow((options: {
		button?: boolean
		side?: "left" | "right"
		control?: DrawerControl
	} = {}) => {

	useName("shiny-drawer")
	useCss(themeCss, styleCss)

	const host = useHost()
	const states = useOnce(() => new States(host))
	const control = useOnce(() => (options.control ?? new DrawerControl()))

	const attrs = useAttrs({
		side: String,
		button: Boolean,
		open: Boolean,
	})

	attrs.open = control.isOpen

	const button = options.button ?? attrs.button
	const side = options.side ?? (attrs.side === "right" ? "right" : "left")
	states.assign(side, control.isOpen ? "opened" : "closed")

	useMount(() => dom.events(window, {keydown: (event: KeyboardEvent) => {
		if (event.code === "Escape")
			control.close()
	}}))

	function renderButton() {
		return html`
			<button part=button @click="${control.toggle}">
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

