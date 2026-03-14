
import {debounce} from "@e280/stz"
import {useOnce, useSignal} from "@e280/sly"

import {CopyStatus} from "./copy-status.js"
import {determineBaseStatus} from "./determine-base-status.js"

export function useCopier(text: string | undefined, ms: number) {
	const $status = useSignal<CopyStatus>(determineBaseStatus(text))

	const reset = useOnce(() => debounce(ms, () => $status.set(determineBaseStatus(text))))

	const flash = useOnce(() => async(status: CopyStatus) => {
		await $status.set(status)
		await reset()
	})

	return {reset, flash, status: $status()}
}

