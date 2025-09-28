
import {signal} from "@e280/strata"

export class BurgerBrain {
	$open = signal(false)

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

