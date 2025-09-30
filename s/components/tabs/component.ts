
import {html} from "lit"
import {dom, view} from "@e280/sly"
import styleCss from "./style.css.js"
import {TabControl} from "./control.js"
import {foundationCss} from "../foundation.css.js"
import {ShinyContext, ShinyElement} from "../framework.js"

export class ShinyTabs extends (
	view(use => (context: ShinyContext, controlOption?: TabControl) => {
		use.name("shiny-tabs")
		use.styles(foundationCss, context.theme, styleCss)

		const attrs = use.attrs.spec({index: Number})
		const control = use.once(() => controlOption ?? new TabControl(attrs.index ?? 0))
		const $tabs = use.signal<HTMLElement[]>([])
		const $panels = use.signal<HTMLElement[]>([])

		async function tabchange(event: Event) {
			const slot = event.currentTarget! as HTMLSlotElement
			await $tabs.set(slot.assignedElements() as HTMLElement[])
		}

		async function panelchange(event: Event) {
			const slot = event.currentTarget! as HTMLSlotElement
			await $panels.set(slot.assignedElements() as HTMLElement[])
		}

		attrs.index = control.$index()
		control.length = $tabs().length

		for (const [index, tab] of $tabs().entries()) {
			const active = (index === control.index)
			dom.attrs(tab).booleans.active = active
			dom.attrs(tab).booleans.disabled = active
			tab.onclick = () => control.setIndex(index)
		}

		for (const [index, tab] of $panels().entries()) {
			const active = (index === control.index)
			dom.attrs(tab).booleans.active = active
			dom.attrs(tab).booleans.hidden = !active
		}

		return html`
			<slot part=tabs @slotchange="${tabchange}"></slot>
			<slot part=panels name=panel @slotchange="${panelchange}"></slot>
		`
	})
	.component(class extends ShinyElement {
		control = new TabControl()
		get index() { return this.control.index }
		get length() { return this.control.length }
		setIndex = this.control.setIndex.bind(this.control)
		shimmy = this.control.shimmy.bind(this.control)
	})
	.props(el => [el.context, el.control] as const)
) {}

