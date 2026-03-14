
export function determineBaseStatus(text: string | undefined) {
	return text === undefined
		? "invalid"
		: "neutral"
}

