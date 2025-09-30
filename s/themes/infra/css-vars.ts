
import {unsafeCSS} from "lit"

export type CssVars = {
	"bg": string
	"alpha": string
	"happy": string
	"sad": string
	"angry": string
	"lame": string
	"inactive-opacity": string
}

export function defaultCssVars(): CssVars {
	return {
		"bg": "#111",
		"alpha": "#afa",
		"happy": "#0fa",
		"sad": "#74f",
		"angry": "#f50",
		"lame": "#8888",
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

