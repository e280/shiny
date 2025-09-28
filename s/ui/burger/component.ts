
import {html} from "lit"
import {dom, view} from "@e280/sly"
import styleCss from "./style.css.js"
import {BurgerBrain} from "./brain.js"
import menu2Svg from "../../icons/tabler/menu-2.svg.js"
import {ShinyContext, ShinyElement} from "../framework.js"

export class ShinyBurger extends (
	view(use => (context: ShinyContext, providedBrain?: BurgerBrain) => {
		use.name("shiny-burger")
		use.styles(context.theme, styleCss)
		const brain = use.once(() => (providedBrain ?? new BurgerBrain()))

		dom.attrs(use.element).booleans.open = brain.isOpen

		return html`
			<div class=plate ?data-open="${brain.isOpen}">
				<slot class=content ?inert="${brain.isOpen}"></slot>

				<div class=clipper>
					<div part=blanket @click="${brain.close}" ?inert="${!brain.isOpen}"></div>

					<div part=drawer>
						<slot name=drawer ?inert="${!brain.isOpen}"></slot>
						<button @click="${brain.toggle}">
							<slot name=button>
								${menu2Svg}
							</slot>
						</button>
					</div>
				</div>
			</div>
		`
	})
	.component(class extends ShinyElement {
		brain = new BurgerBrain()
		attrs = dom.attrs(this).spec({open: Boolean})
	})
	.props(el => [el.context, el.brain] as const)
) {}

