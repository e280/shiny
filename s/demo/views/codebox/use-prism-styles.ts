
import {useOnce} from "@e280/sly"

export function usePrismStyles() {
	return useOnce(() => {
		const tag = document.head.querySelector("[data-prism]")
		if (!tag) throw new Error("failed to find [data-prism] stylesheet")
		const style = new CSSStyleSheet()
		style.replaceSync(tag.textContent)
		return style
	})
}

