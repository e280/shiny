
import {html} from "lit"
import {dom, shadow, useHost, useName, useOnce, useSignal, useStyles} from "@e280/sly"
import styleCss from "./style.css.js"
import {TabControl} from "./control.js"
import {themeCss} from "../../theme/theme.css.js"

export const ShinyTabs = shadow((control?: TabControl) => {
	useName("shiny-tabs")
	useStyles(themeCss, styleCss)

	const host = useHost()
	const attrs = useOnce(() => dom.attrs(host).spec({index: Number}))
	const chosenControl = useOnce(() => control ?? new TabControl(attrs.index ?? 0))

	const $tabs = useSignal<HTMLElement[]>([])
	const $panels = useSignal<HTMLElement[]>([])

	async function tabchange(event: Event) {
		const slot = event.currentTarget! as HTMLSlotElement
		await $tabs.set(slot.assignedElements() as HTMLElement[])
	}

	async function panelchange(event: Event) {
		const slot = event.currentTarget! as HTMLSlotElement
		await $panels.set(slot.assignedElements() as HTMLElement[])
	}

	attrs.index = chosenControl.$index()
	chosenControl.length = $tabs().length

	function isNeighborActive(index: number, delta: number) {
		const nextIndex = chosenControl.clamp(index + delta)
		if (nextIndex === index) return false
		return (nextIndex === chosenControl.index)
	}

	for (const [index, tab] of $tabs().entries()) {
		const active = (index === chosenControl.index)
		const tabAttrs = dom.attrs(tab)
		tabAttrs.booleans.disabled = active
		tabAttrs.booleans["data-active"] = active
		tabAttrs.booleans["data-first"] = (index === 0)
		tabAttrs.booleans["data-last"] = (index === (chosenControl.length - 1))
		tabAttrs.booleans["data-next-is-active"] = isNeighborActive(index, 1)
		tabAttrs.booleans["data-previous-is-active"] = isNeighborActive(index, -1)
		tab.onclick = () => chosenControl.setIndex(index)
	}

	for (const [index, tab] of $panels().entries()) {
		const active = (index === chosenControl.index)
		dom.attrs(tab).booleans.active = active
		dom.attrs(tab).booleans.hidden = !active
	}

	return html`
		<slot part=tabs @slotchange="${tabchange}"></slot>
		<slot part=panels name=panel @slotchange="${panelchange}"></slot>
	`
})

