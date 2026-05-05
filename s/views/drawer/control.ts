
import {signal} from "@e280/strata"

export class DrawerControl {
	$open = signal(false)

	constructor(startOpen = false) {
		if (startOpen) this.$open(true)
	}

	get isOpen() {
		return this.$open()
	}

	async setOpen(value: boolean) {
		return this.$open(value)
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

