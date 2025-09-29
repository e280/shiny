
import {unsafeCSS} from "lit"

export type CssVars = {
	"bg": string
	"alpha": string
	"good": string
	"bad": string
	"invalid": string
	"inactive-opacity": string
}

export function defaultCssVars(): CssVars {
	return {
		"bg": "#111",
		"alpha": "#afa",
		"good": "#0fa",
		"bad": "#f40",
		"invalid": "#8888",
		"inactive-opacity": "0.5",
	}
}

export function renderCssVars(vars: CssVars) {
	return unsafeCSS(
		Object.entries(vars)
			.map(([key, value]) => `--${key}: var(--shiny-${key}, ${value});`)
			.join("\n")
	)
}

