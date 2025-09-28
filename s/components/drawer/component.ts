
import {html} from "lit"
import {dom, view} from "@e280/sly"
import styleCss from "./style.css.js"
import {DrawerBrain} from "./brain.js"
import menu2Svg from "../../icons/tabler/menu-2.svg.js"
import {ShinyContext, ShinyElement} from "../framework.js"

export class ShinyDrawer extends (
	view(use => (context: ShinyContext, options: {button?: boolean, brain?: DrawerBrain} = {}) => {
		use.name("shiny-drawer")
		use.styles(context.theme, styleCss)

		const button = options.button ?? true
		const brain = use.once(() => (options.brain ?? new DrawerBrain()))

		use.mount(() => dom.events(window, {keydown: (event: KeyboardEvent) => {
			if (event.code === "Escape")
				brain.close()
		}}))

		dom.attrs(use.element).booleans.open = brain.isOpen

		return html`
			<div class=plate ?data-open="${brain.isOpen}">
				<slot class=content ?inert="${brain.isOpen}"></slot>

				<div class=clipper>
					<div part=blanket @click="${brain.close}" ?inert="${!brain.isOpen}"></div>

					<div part=drawer>
						<slot name=drawer ?inert="${!brain.isOpen}"></slot>
						${button
							? html`
								<button @click="${brain.toggle}">
									<slot name=button>
										${menu2Svg}
									</slot>
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
		})
		brain = new DrawerBrain(this.attrs.open)
		get isOpen() { return this.brain.isOpen }
		get toggle() { return this.brain.toggle }
		get open() { return this.brain.open }
		get close() { return this.brain.close }
	})
	.props(el => [el.context, {
		brain: el.brain,
		button: el.attrs.button,
	}] as const)
) {}

