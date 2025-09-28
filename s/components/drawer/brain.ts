
import {signal} from "@e280/strata"

export class DrawerBrain {
	$open = signal(false)

	constructor(startOpen = false) {
		if (startOpen) this.$open.set(true)
	}

	get isOpen() {
		return this.$open.get()
	}

	async setOpen(value: boolean) {
		return this.$open.set(value)
	}

	open = async() => {
		await this.setOpen(true)
	}

	close = async() => {
		await this.setOpen(false)
	}

	toggle = async() => {
		return this.setOpen(!this.isOpen)
	}
}

