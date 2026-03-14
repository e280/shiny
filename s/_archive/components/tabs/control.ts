
import {signal} from "@e280/strata"

export class TabControl {
	length = 1
	$index = signal(0)

	constructor(start = 0) {
		this.$index.value = start
	}

	clamp(index: number) {
		index = Math.min(index, this.length - 1)
		index = Math.max(index, 0)
		return index
	}

	get index() {
		return this.clamp(this.$index.get())
	}

	async setIndex(index: number) {
		return this.$index.set(index)
	}

	async shimmy(delta: number) {
		const index = this.clamp(this.index + delta)
		return this.setIndex(index)
	}
}

