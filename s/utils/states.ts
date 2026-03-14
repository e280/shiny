
export class States {
	#states: Set<string>

	constructor(element: HTMLElement) {
		this.#states = element.attachInternals().states as any
	}

	assign(...states: string[]) {
		this.#states.forEach(s => this.#states.delete(s))
		for (const s of states) this.#states.add(s)
		return this
	}
}

